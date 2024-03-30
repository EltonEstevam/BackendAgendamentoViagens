// Carregar o arquivo app.js
const app = require("./app");

// dotenv para carregar as Vareaveis do arquivo .env
require("dotenv").config();

// Porta onde vai rodar o servidor:
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

// Para rodar o servidor em modo de desenvolvimento:
// precisa estar no diretório 'backend'.
// Abra o terminal e rode seguinte comando:
// npm run dev
//
// Para rodar o servidor em modo normal:
// Abra o terminal e rode o seguinte comando:
// npm start
