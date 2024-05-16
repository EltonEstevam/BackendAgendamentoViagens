const connection = require("./connection");
//------------------------------------------------------------------
// Consultar Viagem por ID:
const getID = async (id) => {
  const [getViagem] = await connection.execute(
    "SELECT * FROM viagem WHERE id = ?",
    [id]
  );
  return getViagem;
};
//------------------------------------------------------------------
// Consulta todas as viagens cadastradas no Banco de Dados:
const getALL = async () => {
  const [viagem] = await connection.execute("SELECT * FROM viagem");
  return viagem;
};
//------------------------------------------------------------------
// Criar um novo registro de Viagem:
const createViagem = async (Viagem) => {
  const {
    data_select,
    hora_select,
    nome_paciente,
    rg_paciente,
    tel_paciente,
    destino,
    end_destino,
    ponto_paciente,
    obs,
    ac,
  } = Viagem;

  const query =
    "INSERT INTO viagem(data_select, hora_select, nome_paciente, rg_paciente, tel_paciente, destino, end_destino, ponto_paciente, obs, ac) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const [createViagem] = await connection.execute(query, [
    data_select,
    hora_select,
    nome_paciente,
    rg_paciente,
    tel_paciente,
    destino,
    end_destino,
    ponto_paciente,
    obs,
    ac,
  ]);
  return { insertId: createViagem.insertId };
};
//------------------------------------------------------------------
// Excluir cadastro de Viagem:
const deleteViagem = async (id) => {
  const [removedViagem] = await connection.execute(
    "DELETE FROM viagem WHERE id = ?",
    [id]
  );
  return removedViagem;
};
//------------------------------------------------------------------
// Alterar dados cadastrados de Viagens:
const updateViagem = async (id, Viagem) => {
  const {
    data_select,
    hora_select,
    nome_paciente,
    rg_paciente,
    tel_paciente,
    destino,
    end_destino,
    ponto_paciente,
    obs,
    ac,
  } = Viagem;

  const query =
    "UPDATE viagem SET data_select = ?, hora_select = ?, nome_paciente = ?, rg_paciente = ?, tel_paciente = ?, destino = ?, end_destino = ?, ponto_paciente = ?, obs = ?, ac = ? WHERE id = ?";

  const [updatedViagem] = await connection.execute(query, [
    data_select,
    hora_select,
    nome_paciente,
    rg_paciente,
    tel_paciente,
    destino,
    end_destino,
    ponto_paciente,
    obs,
    ac,
    id,
  ]);
  return updatedViagem;
};
//------------------------------------------------------------------
module.exports = {
  getID,
  getALL,
  createViagem,
  deleteViagem,
  updateViagem,
};
