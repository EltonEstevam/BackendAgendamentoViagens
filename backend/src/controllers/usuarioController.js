const usuarioModel = require("../models/usuarioModel");

//------------------------------------------------------------------
// Selecionar Usuario por ID:

const getID = async (request, response) => {
  const { id } = request.params;
  const getUsuario = await usuarioModel.getID(id);
  return response.status(200).json(getUsuario);
};

//------------------------------------------------------------------

const getAllUsuarios = async (_request, response) => {
  const usuarios = await usuarioModel.getAllUsuarios();
  return response.status(200).json(usuarios);
};

//------------------------------------------------------------------
const createUsuario = async (request, response) => {
  const createdUsuario = await usuarioModel.createUsuario(request.body);
  return response.status(201).json(createdUsuario);
};
//------------------------------------------------------------------
const deleteUsuario = async (request, response) => {
  const { id } = request.params;

  await usuarioModel.deleteUsuario(id);
  return response.status(204).json();
};
//------------------------------------------------------------------
const updateUsuario = async (request, response) => {
  const { id } = request.params;

  await usuarioModel.updateUsuario(id, request.body);
  return response.status(204).json();
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
};
