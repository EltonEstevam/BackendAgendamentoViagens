const express = require("express");

const router = express.Router();

// ---------------------------------------------------------------------------

// Rotas para o Modulo viagemController e viagemMiddleware:
const viagemController = require("./controllers/viagemController");
const viagemMiddleware = require("./middlewares/viagemMiddleware");

// Rotas para o Modulo acompanhanteController e acompanhanteMiddleware:
const acompanhanteController = require("./controllers/acompanhanteController");
const acompanhanteMiddleware = require("./middlewares/acompanhanteMiddleware");

// Rotas para o Modulo motoristaController e motoristaMiddleware:
const motoristaController = require("./controllers/motoristaController");
const motoristaMiddleware = require("./middlewares/motoristaMiddleware");

// ---------------------------------------------------------------------------

// Listar todos os Registros da tabela viagem:
router.get("/viagem", viagemController.getALL);

// Listar Viagem por ID:
router.get("/viagem/:id", viagemController.getID);

// Cadastrar uma nova Viagem:
router.post(
  "/viagem",
  viagemMiddleware.validateFieldData,
  viagemController.createViagem
);

// Excluir casdastro de Viagem informando o ID:
router.delete("/viagem/:id", viagemController.deleteViagem);

// Alterar cadastro de Viagem:
router.put(
  "/viagem/:id",
  viagemMiddleware.validateFieldData,
  viagemController.updateViagem
);

// ---------------------------------------------------------------------------

// Listar todos os registros da tabela Acompanhante:
router.get("/acompanhante", acompanhanteController.getAllAcompanhantes);

// Cadastrar um novo acompanhante:
router.post(
  "/acompanhante",
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldSUS,
  acompanhanteMiddleware.validateFieldDataNascimento,
  acompanhanteController.createAcompanhante
);

// Excluir cadastro de acompanhante informando o ID:
router.delete("/acompanhante/:id", acompanhanteController.deleteAcompanhante);

// Alterar cadastro de acompanhante:
router.put(
  "/acompanhante/:id",
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldSUS,
  acompanhanteMiddleware.validateFieldDataNascimento,
  acompanhanteController.updateAcompanhante
);

// ---------------------------------------------------------------------------

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
