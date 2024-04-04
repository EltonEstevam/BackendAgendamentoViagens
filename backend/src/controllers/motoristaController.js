const motoristaModel = require("../models/motoristaModel");

// Selecionar todos os cadastros de motorista no Banco de Dados:
const getAll = async (_request, response) => {
  const motorista = await motoristaModel.getAll();
  return response.status(200).json(motorista);

  //return response.status(200).json({ messege: "Controller esta Funcionando!" });
};

// Selecionar Motorista por ID:
const getID = async (request, response) => {
  const { id } = request.params;
  const getMotorista = await motoristaModel.getID(id);
  return response.status(200).json(getMotorista);
};

// Criar um novo cadastro de Motorista:
const createMotorista = async (request, response) => {
  const createdMotorista = await motoristaModel.createMotorista(request.body);
  return response.status(201).json(createdMotorista);

  // Teste de response:
  //return response.status(201).json(request.body);
};
// Excluir um cadastro de Motorista:
const deleteMotorista = async (request, response) => {
  const { id } = request.params;

  await motoristaModel.deleteMotorista(id);
  return response.status(204).json();
};
// Alterar cadastro de Motorista:
const updateMotorista = async (request, response) => {
  const { id } = request.params;

  await motoristaModel.updateMotorista(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAll,
  getID,
  createMotorista,
  deleteMotorista,
  updateMotorista,
};
