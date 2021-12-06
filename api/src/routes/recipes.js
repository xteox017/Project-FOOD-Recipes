const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");
const {
  API_KEY,
  API_KEY2,
  API_KEY3,
  API_KEY4,
  API_KEY5,
  API_KEY6,
  URL_RECIPES,
} = process.env;
const axios = require("axios");

const router = Router();

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY6}&number=100&addRecipeInformation=true`
  );
  const apiInfo = apiUrl.data.results.map((el) => {
    return {
      spoonacularScore: el.spoonacularScore,
      healthScore: el.healthScore,
      id: el.id,
      title: el.title,
      readyInMinutes: el.readyInMinutes,
      image: el.image,
      summary: el.summary ? el.summary.replace(/<[^>]*>?/gm, "") : "",
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
    console.log(allRecipes.length);
    res.status(200).send(allRecipes);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recipesTotal = await getAllRecipes();
  if (id) {
    let recipeId = await recipesTotal.filter((el) => el.id == id);
    recipeId.length
      ? res.status(200).json(recipeId)
      : res.status(400).send("Recipe not found!");
  }
});

// router.post("/", async (req, res) => {
//   const {
//     title,
//     summary,
//     spoonacularScore,
//     healthScore,
//     analyzedInstructions,
//     dishTypes,
//     image,
//     createdDb,
//     readyInMinutes,
//     cuisines,
//     diets,
//   } = req.body;

//   const recipeCreated = await Recipe.create({
//     title,
//     summary,
//     spoonacularScore,
//     healthScore,
//     analyzedInstructions,
//     dishTypes,
//     image,
//     createdDb,
//     readyInMinutes,
//     cuisines,
//   });

//   let dietsDb = await Diet.findAll({
//     where: { name: diets },
//   });
//   recipeCreated.addDiet(dietsDb);
//   res.send("Diet created succesfully!");
// });
module.exports = router;
