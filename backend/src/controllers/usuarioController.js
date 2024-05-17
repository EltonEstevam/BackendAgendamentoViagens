const usuarioModel = require("../models/usuarioModel");

//------------------------------------------------------------------
// Selecionar Usuario por ID:

const getID = async (request, response) => {
  const { id } = request.params;
  const getUsuario = await usuarioModel.getID(id);
  return response.status(200).json(getUsuario);
};

//------------------------------------------------------------------
// Seleciona todos os usuarios cadastrados:
const getAllUsuarios = async (_request, response) => {
  const usuarios = await usuarioModel.getAllUsuarios();
  return response.status(200).json(usuarios);
};

//------------------------------------------------------------------
// Cadastrar um novo usuario:
const createUsuario = async (request, response) => {
  const validaEmail = await usuarioModel.validarEmail(request.body);

  // Função para verificar se Email já existe:
  function verificaEmail(Email) {
    const email = Email[0];
    if (email) {
      return true;
    } else {
      return false;
    }
  }

  let res = verificaEmail(validaEmail);
  if (res == true) {
    return response.status(404).json({
      message: "Erro: O email ja existe no sistema",
    });
  } else {
    const createdUsuario = await usuarioModel.createUsuario(request.body);
    return response.status(201).json(createdUsuario);
  }
};
//------------------------------------------------------------------
// Deletar Usuario:
const deleteUsuario = async (request, response) => {
  const { id } = request.params;

  await usuarioModel.deleteUsuario(id);
  return response.status(204).json();
};
//------------------------------------------------------------------
// Atualizar Usuario:
const updateUsuario = async (request, response) => {
  const { id } = request.params;

  await usuarioModel.updateUsuario(id, request.body);
  return response.status(204).json();
};
//------------------------------------------------------------------
// Validar usurio com base em email e senha:
const validaUsuario = async (request, response) => {
  const Credencial = await usuarioModel.validarUsuario(request.body);

  // Função para verificar se o ID existe:
  function verificaUsuario(Credencial) {
    const id = Credencial[0];
    if (id) {
      return true;
    } else {
      return false;
    }
  }

  let res = verificaUsuario(Credencial);
  if (res == false) {
    return response.status(404).json({
      message: "Erro Usuario não encontrado",
    });
  } else {
    return response.status(200).json(Credencial);
  }
};

//------------------------------------------------------------------
module.exports = {
  getID,
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
  validaUsuario,
};
