const express = require("express");

const router = express.Router();

// Rotas para o Modulo motoristaController e motoristaMiddleware:
const motoristaController = require("./controllers/motoristaController");
const motoristaMiddleware = require("./middlewares/motoristaMiddleware");

// Listar todos os Registros da tabela Motorista:
router.get("/motorista", motoristaController.getAll);

// Listar Motorista por ID:
router.get("/motorista/:id", motoristaController.getID);

// Cadastrar um novo Motorista:
router.post(
  "/motorista",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldFone,
  motoristaMiddleware.validateFieldEND,
  motoristaMiddleware.validateFieldCNH,
  motoristaController.createMotorista
);

// Excluir casdastro de motorista informando o ID:
router.delete("/motorista/:id", motoristaController.deleteMotorista);

// Alterar cadastro de motorista:
router.put(
  "/motorista/:id",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldFone,
  motoristaMiddleware.validateFieldEND,
  motoristaMiddleware.validateFieldCNH,
  motoristaController.updateMotorista
);

module.exports = router;
