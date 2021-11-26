const { Router } = require("express");
const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res) => {
  const dietsApi = await axios.get(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=52faddd5527041bfb6bce4cd86454895&number=100&addRecipeInformation=true"
  );
  const dietsX = dietsApi.data.results.map((el) => el.diets);

  let totalDietsApi = dietsX.flat();
  const arrDiets = new Set(totalDietsApi);

  const result = [...arrDiets];

  console.log(result);

  //   totalDietsApi.forEach((el) => {
  //     Diet.findOrCreate({
  //       where: { name: el },
  //     });
  //   });

  //   const allDiets = await Diet.findAll();
  // //   console.log(allDiets)

  //   const filtAllDiets = new Set(allDiets);

  //   let result = [...filtAllDiets];

  //   res.send(result);
});

module.exports = router;

//  let data = [1, 2, 6, 1, 2, 5, 9, "33", "33"];

//  const dataArr = new Set(data);

//  let result = [...dataArr];
