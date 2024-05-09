const connection = require("./connection");
//------------------------------------------------------------------
// Consultar acompanhante por ID:
const getID = async (id) => {
  const [getAcompanhante] = await connection.execute(
    "SELECT * FROM acompanhante WHERE id = ?",
    [id]
  );
  return getAcompanhante;
};
//------------------------------------------------------------------
const getAllAcompanhantes = async () => {
  const [acompanhantes] = await connection.execute(
    "SELECT * FROM acompanhante"
  );
  return acompanhantes;
};
//------------------------------------------------------------------
const createAcompanhante = async (acompanhante) => {
  const {
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
  } = acompanhante;

  const query =
    "INSERT INTO acompanhante(nome_acompanhante, rg_acompanhante, end_acompanhante, ponto_acompanhante) VALUES (?, ?, ?, ?)";

  const [createdAcompanhante] = await connection.execute(query, [
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
  ]);
  return { insertId: createdAcompanhante.insertId };
};
//------------------------------------------------------------------
const deleteAcompanhante = async (id) => {
  const [removedAcompanhante] = await connection.execute(
    "DELETE FROM acompanhante WHERE id = ?",
    [id]
  );
  return removedAcompanhante;
};
//------------------------------------------------------------------
const updateAcompanhante = async (id, acompanhante) => {
  const {
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
  } = acompanhante;

  const query =
    "UPDATE acompanhante SET nome_acompanhante = ?, rg_acompanhante = ?, end_acompanhante = ?, ponto_acompanhante = ? WHERE id = ?";

  const [updatedAcompanhante] = await connection.execute(query, [
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
    id,
  ]);
  return updatedAcompanhante;
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getAllAcompanhantes,
  createAcompanhante,
  deleteAcompanhante,
  updateAcompanhante,
};
