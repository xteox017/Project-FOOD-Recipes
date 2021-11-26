const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");
const { API_KEY, URL_RECIPES } = process.env;
const axios = require("axios");

const router = Router();

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=52faddd5527041bfb6bce4cd86454895&number=100&addRecipeInformation=true"
  );
  const apiInfo = apiUrl.data.results.map((el) => {
    return {
      spoonacularScore: el.spoonacularScore,
      healthScore: el.healthScore,
      id: el.id,
      title: el.title,
      readyInMinutes: el.readyInMinutes,
      image: el.image,
      summary: el.summary,
      cuisines: el.cuisines.map((el) => el),
      dishTypes: el.dishTypes.map((el) => el),
      diets: el.diets.map((el) => el),
      analyzedInstructions:
        el.analyzedInstructions.length > 0
          ? el.analyzedInstructions[0].steps.map((el) => el.step)
          : "Sorry, no steps available for this recipe",
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: [],
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

router.get("/", async (req, res) => {
  const { name } = req.query;

  let allRecipes = await getAllRecipes();

  if (name) {
    let recipeName = await allRecipes.filter((el) =>
      el.title.toLowerCase().includes(name.toLowerCase())
    );

    recipeName.length
      ? res.status(200).send(recipeName)
      : res.status(404).send("That recipe does not match with our database");
  } else {
    res.status(200).send(allRecipes);
  }
});

module.exports = router;
