const express = require("express");
const router = express.Router();
const wizardController = require("../controllers/wizardController");
const upload = require("../config/upload.js"); // crie a pasta middleware e o arquivo upload.js
const apiKeyMiddleware = require("../config/apiKey.js")

router.use(apiKeyMiddleware); 
router.get("/", wizardController.getAllWizards);
router.get("/:id", wizardController.getWizard);

router.post("/", upload.single("photo"), wizardController.createWizard);


router.put("/:id", wizardController.updateWizard);
router.delete("/:id", wizardController.deleteWizard);


module.exports = router;
