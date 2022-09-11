const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonesRoute = require("./pokemones")
const tiposRoute = require("./tipos")
// const typesRoute = require("")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemones",pokemonesRoute)
router.use("/tipos",tiposRoute)


module.exports = router;
