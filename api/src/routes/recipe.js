const axios = require("axios");
const { Router } = require("express");
const { Recipe, Diet } = require("../db");
const { API_KEY, URL_RECIPES } = process.env;

const router = Router();

router.post("/", async (req, res) => {
  const {
    title,
    summary,
    spoonacularScore,
    healthScore,
    analyzedInstructions,
    dishTypes,
    image,
    createdDb,
    readyInMinutes,
    cuisines,
    diets,
  } = req.body;

  const recipeCreated = await Recipe.create({
    title,
    summary,
    spoonacularScore,
    healthScore,
    analyzedInstructions,
    dishTypes,
    image,
    createdDb,
    readyInMinutes,
    cuisines,
  });

  let dietsDb = await Diet.findAll({
    where: { name: diets },
  });
  recipeCreated.addDiet(dietsDb);
  res.send("Diet created succesfully!");
});

module.exports = router;
