const express = require("express");
const router = express.Router();
const houseController = require("../controllers/houseController");
const apiKeyMiddleware = require("../config/apiKey.js")

router.use(apiKeyMiddleware); 
/**
 * @swagger
 * tags:
 *   name: Houses
 *   description: Gerenciamento de Casas
 */

/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todos as casas
 *     tags: [Houses]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filtro por nome
 *     responses:
 *       200:
 *         description: Lista de casas
 */


router.get("/", houseController.getAllHouses);
router.get("/:id", houseController.getHouse);
router.post("/", houseController.createHouse);
router.put("/:id", houseController.updateHouse);
router.delete("/:id", houseController.deleteHouse);

module.exports = router;
