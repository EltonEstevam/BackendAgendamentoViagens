// Carregar o arquivo app.js
const app = require("./app");

// Mudança para iniciar o servidor em SSL
const fs = require("fs");
const https = require("https");

// Configure HTTPS options
const options = {
  key: fs.readFileSync("src/cert/key.pem"),
  cert: fs.readFileSync("src/cert/cert.pem"),
};

// Set up HTTPS server
const server = https.createServer(options, app);

// dotenv para carregar as Vareaveis do arquivo .env
require("dotenv").config();

// Porta onde vai rodar o servidor:
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

// Para rodar o servidor em modo de desenvolvimento:
// precisa estar no diretório 'backend'.
// Abra o terminal e rode seguinte comando:
// npm run dev
//
// Para rodar o servidor em modo normal:
// Abra o terminal e rode o seguinte comando:
// npm start
