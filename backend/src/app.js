const express = require("express");
const cors = require("cors");

// Carregar o arquivo router.js
const router = require("./router");

const app = express();

// Usar API para receber em modo json
app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;
