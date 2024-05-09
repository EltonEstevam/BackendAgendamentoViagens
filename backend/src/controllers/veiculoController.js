const veiculoModel = require("../models/veiculoModel");

//------------------------------------------------------------------
// Selecionar Veiculo por ID:

const getID = async (request, response) => {
  const { id } = request.params;
  const getVeiculo = await veiculoModel.getID(id);
  return response.status(200).json(getVeiculo);
};

//------------------------------------------------------------------

const getAllVeiculos = async (_request, response) => {
  const veiculos = await veiculoModel.getAllVeiculos();
  return response.status(200).json(veiculos);
};

//------------------------------------------------------------------
const createVeiculo = async (request, response) => {
  const createdVeiculo = await veiculoModel.createVeiculo(request.body);
  return response.status(201).json(createdVeiculo);
};
//------------------------------------------------------------------
const deleteVeiculo = async (request, response) => {
  const { id } = request.params;

  await veiculoModel.deleteVeiculo(id);
  return response.status(204).json();
};
//------------------------------------------------------------------
const updateVeiculo = async (request, response) => {
  const { id } = request.params;

  await veiculoModel.updateVeiculo(id, request.body);
  return response.status(204).json();
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getAllVeiculos,
  createVeiculo,
  deleteVeiculo,
  updateVeiculo,
};
