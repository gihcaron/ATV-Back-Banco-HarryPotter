require("dotenv").config();
const express = require("express");
const cors = require("cors");
const wizardRoutes = require("./src/routes/wizardRoutes.js");
const houseRoutes = require("./src/routes/houseRoutes.js");
const reportRoutes = require("./src/routes/reportRoutes.js");
const setupSwagger = require('./src/config/swagger.js'); 



const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("/api/wizards", wizardRoutes);
app.use("/api/houses", houseRoutes);
app.use("/api", reportRoutes);

const path = require("path");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});