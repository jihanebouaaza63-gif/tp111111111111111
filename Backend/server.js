const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();
connectDB()
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Mon premier serveur MERN !");
});
app.get("/api/test", (req, res) => {
    res.json({ message: "L'API fonctionne correctement" });
});