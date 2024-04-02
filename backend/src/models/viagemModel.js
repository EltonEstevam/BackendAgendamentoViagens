const connection = require("./connection");

// Consulta todas as viagens cadastradas no Banco de Dados:
const getAll = async () => {
  const [viagem] = await connection.execute("SELECT * FROM viagem");
  return viagem;
};

// Criar um novo registro de Viagem:
const createViagem = async (Viagem) => {
  const { data_select } = Viagem;
  const { cartao_sus } = Viagem;
  const { nome_paciente } = Viagem;
  const { rg_paciente } = Viagem;
  const { data_nascimento } = Viagem;
  const { destino } = Viagem;
  const { end_destino } = Viagem;
  const { ponto } = Viagem;
  const { obs } = Viagem;
  const { ac } = Viagem;

  const query =
    "INSERT INTO viagem(data_select, cartao_sus, nome_paciente, rg_paciente, data_nascimento, destino, end_destino, ponto, obs, ac) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const [createViagem] = await connection.execute(query, [
    data_select,
    cartao_sus,
    nome_paciente,
    rg_paciente,
    data_nascimento,
    destino,
    end_destino,
    ponto,
    obs,
    ac,
  ]);
  return { insertId: createViagem.insertId };
};

// Excluir cadastro de Viagem:
const deleteViagem = async (id) => {
  const [removedViagem] = await connection.execute(
    "DELETE FROM viagem WHERE id = ?",
    [id]
  );
  return removedViagem;
};

// Alterar dados cadastrados de Viagens:
const updateViagem = async (id, Viagem) => {
  const { data_select } = Viagem;
  const { cartao_sus } = Viagem;
  const { nome_paciente } = Viagem;
  const { rg_paciente } = Viagem;
  const { data_nascimento } = Viagem;
  const { destino } = Viagem;
  const { end_destino } = Viagem;
  const { ponto } = Viagem;
  const { obs } = Viagem;
  const { ac } = Viagem;

  const query =
    "UPDATE viagem SET data_select = ?, cartao_sus = ?, nome_paciente = ?, rg_paciente = ?, data_nascimento = ?, destino = ?, end_destino = ?, ponto = ?, obs = ?, ac = ? WHERE id = ?";

  const [updatedViagem] = await connection.execute(query, [
    data_select,
    cartao_sus,
    nome_paciente,
    rg_paciente,
    data_nascimento,
    destino,
    end_destino,
    ponto,
    obs,
    ac,
    id,
  ]);
  return updatedViagem;
};

module.exports = {
  getAll,
  createViagem,
  deleteViagem,
  updateViagem,
};
