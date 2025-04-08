const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/report/csv", reportController.exportWizardCSV);

// Rota para exportar relatório em PDF
router.get("/report/pdf", reportController.exportWizardPDF);

module.exports = router;