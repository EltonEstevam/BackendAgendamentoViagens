const connection = require("./connection");
//------------------------------------------------------------------
// Consultar Viagem e Acompanhante por ID:
const getID = async (id) => {
  const [getViagem] = await connection.execute(
    "SELECT * FROM viagem WHERE id = ?",
    [id]
  );
  return getViagem;
};

//------------------------------------------------------------------
// Consultar Viagem e Acompanhante por Nome:
const getNome = async (paciente) => {
  const [getViagem] = await connection.execute(
    "SELECT * FROM viagem WHERE nome_paciente LIKE CONCAT('%', ?, '%')",
    [paciente]
  );
  return getViagem;
};
//------------------------------------------------------------------
// Consulta todas as viagens cadastradas no Banco de Dados:
const getViagens = async () => {
  const [viagems] = await connection.execute("SELECT * FROM viagem");
  return viagems;
};
//------------------------------------------------------------------

// Criar um novo registro de Viagem com Acompanhante:
const createViagemACompanhante = async (ViagemAcompanhante) => {
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
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
  } = ViagemAcompanhante;

  const query1 =
    "INSERT INTO acompanhante(nome_acompanhante, rg_acompanhante, end_acompanhante, ponto_acompanhante) VALUES (?, ?, ?, ?)";

  const [createdAcompanhante] = await connection.execute(query1, [
    nome_acompanhante,
    rg_acompanhante,
    end_acompanhante,
    ponto_acompanhante,
  ]);

  const idAcompanhante = createdAcompanhante.insertId;

  const query2 =
    "INSERT INTO viagem(data_select, hora_select, nome_paciente, rg_paciente, tel_paciente, destino, end_destino, ponto_paciente, obs, ac, ac_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  const [createViagemACompanhante] = await connection.execute(query2, [
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
    idAcompanhante,
  ]);
  return { insertId: createViagemACompanhante.insertId };
};
//------------------------------------------------------------------

module.exports = {
  getID,
  getNome,
  getViagens,
  createViagemACompanhante,
};
