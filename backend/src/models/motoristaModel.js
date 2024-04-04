const connection = require("./connection");

// Consulta todos os motoristas cadastrados no Banco de Dados:
const getAll = async () => {
  const [motorista] = await connection.execute("SELECT * FROM motorista");
  return motorista;
};

// Consultar Motorista por ID:
const getID = async (id) => {
  const [getMotorista] = await connection.execute(
    "SELECT * FROM motorista WHERE id = ?",
    [id]
  );
  return getMotorista;
};

// Criar um novo cadastro de motorista:
const createMotorista = async (Motorista) => {
  const { nome } = Motorista;
  const { telefone } = Motorista;
  const { endereco } = Motorista;
  const { cnh } = Motorista;

  const query =
    "INSERT INTO motorista(nome, telefone, endereco, cnh) VALUES (?, ?, ?, ?)";

  const [createMotorista] = await connection.execute(query, [
    nome,
    telefone,
    endereco,
    cnh,
  ]);
  return { insertId: createMotorista.insertId };
};

// Excluir cadastro de Motorista:
const deleteMotorista = async (id) => {
  const [removedMotorista] = await connection.execute(
    "DELETE FROM motorista WHERE id = ?",
    [id]
  );
  return removedMotorista;
};

// Alterar dados cadastrados de Motoristas:
const updateMotorista = async (id, Motorista) => {
  const { nome } = Motorista;
  const { telefone } = Motorista;
  const { endereco } = Motorista;
  const { cnh } = Motorista;

  const query =
    "UPDATE motorista SET nome = ?, telefone = ?, endereco = ?, cnh = ?  WHERE id = ?";

  const [updatedMotorista] = await connection.execute(query, [
    nome,
    telefone,
    endereco,
    cnh,

    id,
  ]);
  return updatedMotorista;
};

module.exports = {
  getAll,
  getID,
  createMotorista,
  deleteMotorista,
  updateMotorista,
};
