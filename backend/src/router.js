const express = require("express");

const router = express.Router();

// ---------------------------------------------------------------------------
// Rotas para o Modulo usuarioController e usuarioMiddleware:
const usuarioController = require("./controllers/usuarioController");
const usuarioMiddleware = require("./middlewares/usuarioMiddleware");
// ---------------------------------------------------------------------------
// Rotas para o Modulo viagemController e viagemMiddleware:
const viagemController = require("./controllers/viagemController");
const viagemMiddleware = require("./middlewares/viagemMiddleware");
// ---------------------------------------------------------------------------
// Rotas para o Modulo acompanhanteController e acompanhanteMiddleware:
const acompanhanteController = require("./controllers/acompanhanteController");
const acompanhanteMiddleware = require("./middlewares/acompanhanteMiddleware");
// ---------------------------------------------------------------------------
// Rotas para o Modulo motoristaController e motoristaMiddleware:
const motoristaController = require("./controllers/motoristaController");
const motoristaMiddleware = require("./middlewares/motoristaMiddleware");

// ---------------------------------------------------------------------------
// Listar todos os Registros da tabela usuario:
router.get("/usuario", usuarioController.getAllUsuarios);
// ---------------------------------------------------------------------------
// Listar usuario por ID:
router.get("/usuario/:id", usuarioController.getID);
// ---------------------------------------------------------------------------
// Cadastrar um novo usuario:
router.post(
  "/usuario",
  usuarioMiddleware.validateFieldNome,
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioMiddleware.validateFieldDATA,
  usuarioMiddleware.validateFieldMatricula,
  usuarioController.createUsuario
);
// ---------------------------------------------------------------------------
// Excluir casdastro de usuario informando o ID:
router.delete("/usuario/:id", usuarioController.deleteUsuario);
// ---------------------------------------------------------------------------
// Alterar cadastro de usuario:
router.put(
  "/usuario/:id",
  usuarioMiddleware.validateFieldNome,
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioMiddleware.validateFieldDATA,
  usuarioMiddleware.validateFieldMatricula,
  usuarioController.updateUsuario
);

// ---------------------------------------------------------------------------
// Listar todos os Registros da tabela viagem:
router.get("/viagem", viagemController.getALL);
// ---------------------------------------------------------------------------
// Listar Viagem por ID:
router.get("/viagem/:id", viagemController.getID);
// ---------------------------------------------------------------------------
// Cadastrar uma nova Viagem:
router.post(
  "/viagem",
  viagemMiddleware.validateFieldData,
  viagemMiddleware.validateFieldNome,
  viagemMiddleware.validateFieldRG,
  viagemMiddleware.validateFieldTEL,
  viagemMiddleware.validateFieldDES,
  viagemMiddleware.validateFieldEND,
  viagemMiddleware.validateFieldPON,
  viagemController.createViagem
);
// ---------------------------------------------------------------------------
// Excluir casdastro de Viagem informando o ID:
router.delete("/viagem/:id", viagemController.deleteViagem);
// ---------------------------------------------------------------------------
// Alterar cadastro de Viagem:
router.put(
  "/viagem/:id",
  viagemMiddleware.validateFieldData,
  viagemMiddleware.validateFieldNome,
  viagemMiddleware.validateFieldRG,
  viagemMiddleware.validateFieldTEL,
  viagemMiddleware.validateFieldDES,
  viagemMiddleware.validateFieldEND,
  viagemMiddleware.validateFieldPON,
  viagemController.updateViagem
);

// ---------------------------------------------------------------------------

// Listar todos os registros da tabela acompanhante:

router.get("/acompanhante", acompanhanteController.getAllAcompanhantes);
// ---------------------------------------------------------------------------
// Listar acompanhante por ID:

router.get("/acompanhante/:id", acompanhanteController.getID);
// ---------------------------------------------------------------------------
// Cadastrar um novo acompanhante:
router.post(
  "/acompanhante",
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldEND,
  acompanhanteMiddleware.validateFieldPonto,
  acompanhanteController.createAcompanhante
);
// ---------------------------------------------------------------------------
// Excluir cadastro de acompanhante informando o ID:
router.delete("/acompanhante/:id", acompanhanteController.deleteAcompanhante);
// ---------------------------------------------------------------------------
// Alterar cadastro de acompanhante:
router.put(
  "/acompanhante/:id",
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldEND,
  acompanhanteMiddleware.validateFieldPonto,
  acompanhanteController.updateAcompanhante
);
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// Listar todos os Registros da tabela motorista:
router.get("/motorista", motoristaController.getAll);
// ---------------------------------------------------------------------------
// Listar Motorista por ID:
router.get("/motorista/:id", motoristaController.getID);
// ---------------------------------------------------------------------------
// Cadastrar um novo Motorista:
router.post(
  "/motorista",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldCNH,
  motoristaMiddleware.validateFieldMatricula,
  motoristaMiddleware.validateFieldFone,
  motoristaController.createMotorista
);
// ---------------------------------------------------------------------------
// Excluir casdastro de motorista informando o ID:
router.delete("/motorista/:id", motoristaController.deleteMotorista);
// ---------------------------------------------------------------------------
// Alterar cadastro de motorista:
router.put(
  "/motorista/:id",
  motoristaMiddleware.validateFieldNome,
  motoristaMiddleware.validateFieldCNH,
  motoristaMiddleware.validateFieldMatricula,
  motoristaMiddleware.validateFieldFone,
  motoristaController.updateMotorista
);
// ---------------------------------------------------------------------------
module.exports = router;
