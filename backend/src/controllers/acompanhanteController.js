const acompanhanteModel = require("../models/acompanhanteModel");

const getAllAcompanhantes = async (_request, response) => {
  const acompanhantes = await acompanhanteModel.getAllAcompanhantes();
  return response.status(200).json(acompanhantes);
};

const createAcompanhante = async (request, response) => {
  const createdAcompanhante = await acompanhanteModel.createAcompanhante(
    request.body
  );
  return response.status(201).json(createdAcompanhante);
};

const deleteAcompanhante = async (request, response) => {
  const { id } = request.params;

  await acompanhanteModel.deleteAcompanhante(id);
  return response.status(204).json();
};

const updateAcompanhante = async (request, response) => {
  const { id } = request.params;

  await acompanhanteModel.updateAcompanhante(id, request.body);
  return response.status(204).json();
};

module.exports = {
  getAllAcompanhantes,
  createAcompanhante,
  deleteAcompanhante,
  updateAcompanhante,
};
