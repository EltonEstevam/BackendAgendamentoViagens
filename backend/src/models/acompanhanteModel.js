const connection = require("./connection");

const getAllAcompanhantes = async () => {
  const [acompanhantes] = await connection.execute(
    "SELECT * FROM acompanhante"
  );
  return acompanhantes;
};

const createAcompanhante = async (acompanhante) => {
  const {
    nome_acompanhante,
    rg_acompanhante,
    sus_acompanhante,
    data_nascimento,
  } = acompanhante;

  const query =
    "INSERT INTO acompanhante(nome_acompanhante, rg_acompanhante, sus_acompanhante, data_nascimento) VALUES (?, ?, ?, ?)";

  const [createdAcompanhante] = await connection.execute(query, [
    nome_acompanhante,
    rg_acompanhante,
    sus_acompanhante,
    data_nascimento,
  ]);
  return { insertId: createdAcompanhante.insertId };
};

const deleteAcompanhante = async (id) => {
  const [removedAcompanhante] = await connection.execute(
    "DELETE FROM acompanhante WHERE id = ?",
    [id]
  );
  return removedAcompanhante;
};

const updateAcompanhante = async (id, acompanhante) => {
  const {
    nome_acompanhante,
    rg_acompanhante,
    sus_acompanhante,
    data_nascimento,
  } = acompanhante;

  const query =
    "UPDATE acompanhante SET nome_acompanhante = ?, rg_acompanhante = ?, sus_acompanhante = ?, data_nascimento = ? WHERE id = ?";

  const [updatedAcompanhante] = await connection.execute(query, [
    nome_acompanhante,
    rg_acompanhante,
    sus_acompanhante,
    data_nascimento,
    id,
  ]);
  return updatedAcompanhante;
};

module.exports = {
  getAllAcompanhantes,
  createAcompanhante,
  deleteAcompanhante,
  updateAcompanhante,
};
