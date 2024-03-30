const express = require("express");

const router = express.Router();

// Rotas para o Modulo motoristaController:
const motoristaController = require("./controllers/motoristaController");
const motoristaMiddleware = require("./middlewares/motoristaMiddleware");

// Listar todos os Registros da tabela Motorista:
router.get("/motorista", motoristaController.getAll);

// Cadastrar um novo Motorista:
router.post(
  "/motorista",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldCNH,
  motoristaController.createMotorista
);

// Excluir casdastro de motorista informando o ID:
router.delete("/motorista/:id", motoristaController.deleteMotorista);

// Alterar cadastro de motorista:
router.put(
  "/motorista/:id",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldCNH,
  motoristaController.updateMotorista
);

module.exports = router;
