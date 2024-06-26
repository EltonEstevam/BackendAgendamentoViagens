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
// Rotas para o Modulo veiculoController e veiculoMiddleware:
const veiculoController = require("./controllers/veiculoController");
const veiculoMiddleware = require("./middlewares/veiculoMiddleware");
// Rotas para o Modulo viagemAController:
const viagemAController = require("./controllers/viagemAController");
// ---------------------------------------------------------------------------

// Listar todos os usuarios:
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
  usuarioMiddleware.validateFieldMatricula,
  usuarioMiddleware.validateFieldRoles,
  usuarioController.createUsuario
);
// ---------------------------------------------------------------------------
// Excluir Usuario informando o ID:
router.delete("/usuario/:id", usuarioController.deleteUsuario);
// ---------------------------------------------------------------------------
// Alterar Cadastro de usuario informando o ID :
router.put(
  "/usuario/:id",
  usuarioMiddleware.validateFieldNome,
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioMiddleware.validateFieldMatricula,
  usuarioMiddleware.validateFieldRoles,
  usuarioController.updateUsuario
);

// Login de usuario no sistema:
router.post(
  "/usuario/login",
  usuarioMiddleware.validateFieldEmail,
  usuarioMiddleware.validateFieldSenha,
  usuarioController.validaUsuario
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
// Excluir Viagem informando o ID:
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
// Excluir acompanhante informando o ID:
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
// Excluir motorista informando o ID:
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
); // ---------------------------------------------------------------------------
// Listar todos os Registros da tabela veiculo:
router.get("/veiculo", veiculoController.getAllVeiculos);
// ---------------------------------------------------------------------------
// Listar veiculo por ID:
router.get("/veiculo/:id", veiculoController.getID);
// ---------------------------------------------------------------------------
// Cadastrar um novo veiculo:
router.post(
  "/veiculo",
  veiculoMiddleware.validateFieldMarca,
  veiculoMiddleware.validateFieldModelo,
  veiculoMiddleware.validateFieldPlaca,
  veiculoMiddleware.validateFieldCAP,
  veiculoMiddleware.validateFieldKM,
  veiculoController.createVeiculo
);
// ---------------------------------------------------------------------------
// Excluir veiculo informando o ID:
router.delete("/veiculo/:id", veiculoController.deleteVeiculo);
// ---------------------------------------------------------------------------
// Alterar cadastro de veiculo:
router.put(
  "/veiculo/:id",
  veiculoMiddleware.validateFieldMarca,
  veiculoMiddleware.validateFieldModelo,
  veiculoMiddleware.validateFieldPlaca,
  veiculoMiddleware.validateFieldCAP,
  veiculoMiddleware.validateFieldKM,
  veiculoController.updateVeiculo
);
// ---------------------------------------------------------------------------

// Listar Viagem e Acompanhante por ID:
router.get("/viagem/acompanhante/:id", viagemAController.getID);
// Listar Viagem e Acompanhante por Nome do Paciente:
router.get(
  "/viagem/paciente/nome",
  viagemMiddleware.validateFieldNome,
  viagemAController.getNome
);
// Listar todas as viagens incluindo Acompanhantes:
router.get("/viagens", viagemAController.getViagens);

// Cadastrar uma nova Viagem com Acompanhante:
router.post(
  "/viagem/acompanhante/",
  viagemMiddleware.validateFieldData,
  viagemMiddleware.validateFieldHora,
  viagemMiddleware.validateFieldNome,
  viagemMiddleware.validateFieldRG,
  viagemMiddleware.validateFieldTEL,
  viagemMiddleware.validateFieldDES,
  viagemMiddleware.validateFieldEND,
  viagemMiddleware.validateFieldPON,
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldEND,
  acompanhanteMiddleware.validateFieldPonto,
  viagemAController.createViagemAcompanhante
);

// Alterar uma Viagem com Acompanhante:
router.put(
  "/viagem/acompanhante/:id",
  viagemMiddleware.validateFieldData,
  viagemMiddleware.validateFieldHora,
  viagemMiddleware.validateFieldNome,
  viagemMiddleware.validateFieldRG,
  viagemMiddleware.validateFieldTEL,
  viagemMiddleware.validateFieldDES,
  viagemMiddleware.validateFieldEND,
  viagemMiddleware.validateFieldPON,
  acompanhanteMiddleware.validateFieldNome,
  acompanhanteMiddleware.validateFieldRG,
  acompanhanteMiddleware.validateFieldEND,
  acompanhanteMiddleware.validateFieldPonto,
  viagemAController.updateViagemAcompanhante
);

module.exports = router;
