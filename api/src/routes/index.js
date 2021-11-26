const { Router } = require("express");
const recipeRouter = require("./recipe");
const dietRouter = require("./diet");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipe", recipeRouter);
router.use("/diet", dietRouter);

module.exports = router;
