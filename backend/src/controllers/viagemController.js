const viagemModel = require("../models/viagemModel");

// Selecionar todos os cadastros:

const getALL = async (_request, response) => {
  const viagen = await viagemModel.getALL();
  return response.status(200).json(viagen);

  //return response.status(200).json({ messege: "Controller esta Funcionando!" });
};

// Selecionar Viagem por ID:
const getID = async (request, response) => {
  const { id } = request.params;
  const getID = await viagemModel.getID(id);
  return response.status(200).json(getID);
};

// Criar um novo cadastro de Viagem:
const createViagem = async (request, response) => {
  const createdViagem = await viagemModel.createViagem(request.body);
  return response.status(201).json(createdViagem);

  // Teste de response:
  //return response.status(201).json(request.body);
};

// Excluir um cadastro de Viagem:
const deleteViagem = async (request, response) => {
  const { id } = request.params;

  await viagemModel.deleteViagem(id);
  return response.status(204).json();
};

// Alterar cadastro de Viagem:
const updateViagem = async (request, response) => {
  const { id } = request.params;

  await viagemModel.updateViagem(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getALL,
  getID,
  createViagem,
  deleteViagem,
  updateViagem,
};
