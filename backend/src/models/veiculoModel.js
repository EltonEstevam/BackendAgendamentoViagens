const connection = require("./connection");
//------------------------------------------------------------------
// Consultar Veiculo por ID:
const getID = async (id) => {
  const [getVeiculo] = await connection.execute(
    "SELECT * FROM veiculo WHERE id = ?",
    [id]
  );
  return getVeiculo;
};
//------------------------------------------------------------------
const getAllVeiculos = async () => {
  const [veiculos] = await connection.execute("SELECT * FROM veiculo");
  return veiculos;
};

const createVeiculo = async (veiculo) => {
  const { marca, modelo, placa, capacidade, km_atual, obs } = veiculo;

  const query =
    "INSERT INTO veiculo(marca, modelo, placa, capacidade, km_atual, obs) VALUES (?, ?, ?, ?, ?, ?)";

  const [createdVeiculo] = await connection.execute(query, [
    marca,
    modelo,
    placa,
    capacidade,
    km_atual,
    obs,
  ]);
  return { insertId: createdVeiculo.insertId };
};
//------------------------------------------------------------------
const deleteVeiculo = async (id) => {
  const [removedVeiculo] = await connection.execute(
    "DELETE FROM veiculo WHERE id = ?",
    [id]
  );
  return removedVeiculo;
};
//------------------------------------------------------------------
const updateVeiculo = async (id, veiculo) => {
  const { marca, modelo, placa, capacidade, km_atual, obs } = veiculo;

  const query =
    "UPDATE veiculo SET marca = ?, modelo = ?, placa = ?, capacidade = ?, km_atual = ?, obs = ? WHERE id = ?";

  const [updatedVeiculo] = await connection.execute(query, [
    marca,
    modelo,
    placa,
    capacidade,
    km_atual,
    obs,
    id,
  ]);
  return updatedVeiculo;
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getAllVeiculos,
  createVeiculo,
  deleteVeiculo,
  updateVeiculo,
};
