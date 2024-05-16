const viagemAModel = require("../models/viagemAModel");
const acompanhanteModel = require("../models/acompanhanteModel");

// Selecionar Viagem e Acompanhante por ID:

const getID = async (request, response) => {
  const { id } = request.params;
  const getID = await viagemAModel.getID(id);

  function verificaID(getID) {
    if (getID[0]) {
      return true;
    } else {
      return false;
    }
  }

  let res = verificaID(getID);
  if (res == false) {
    return response.status(404).json({
      message: "ID não encontrado",
    });
  } else {
    if (getID[0].ac == 1) {
      const viagem = getID;
      const acompanhanteID = getID[0].ac_id;
      const acompanhante = await acompanhanteModel.getID(acompanhanteID);
      const retorno = { viagem, acompanhante };
      return response.status(200).json(retorno);
    } else {
      return response.status(200).json(getID);
    }
  }
};
//------------------------------------------------------------------
// Selecionar Viagem e Acompanhante por Nome:

const getNome = async (request, response) => {
  const { nome_paciente } = request.body;
  const getNome = await viagemAModel.getNome(nome_paciente);
  function verificaNome(getNome) {
    if (getNome[0]) {
      return true;
    } else {
      return false;
    }
  }

  let res = verificaNome(getNome);
  if (res == false) {
    return response.status(404).json({
      message: "Paciente não encontrado",
    });
  } else {
    if (getNome[0].ac == 1) {
      const viagem = getNome;
      const acompanhanteID = getNome[0].ac_id;
      const acompanhante = await acompanhanteModel.getID(acompanhanteID);
      const retorno = { viagem, acompanhante };
      return response.status(200).json(retorno);
    } else {
      return response.status(200).json(getNome);
    }
  }
};

//------------------------------------------------------------------
// Selecionar todos os cadastros de Viagem e Acompanhante:

const getViagens = async (_request, response) => {
  const viagens = await viagemAModel.getViagens();

  //console.log(viagens);
  // Função para verificar se o ID existe:
  function verificaViagem(viagem) {
    if (viagem) {
      return true;
    } else {
      return false;
    }
  }

  let res = verificaViagem(viagens);
  if (res == false) {
    return response.status(404).json({
      message: "Erro nenhum registro encontrado",
    });
  } else {
    const grupos = [];
    for (let i = 0; i < viagens.length; i++) {
      const acompanhanteID = viagens[i].ac_id;
      if (viagens[i].ac == 0) {
        grupos.push([viagens[i]]);
      } else {
        const acompanhante = await acompanhanteModel.getID(acompanhanteID);
        grupos.push([viagens[i], acompanhante]);
      }
    }

    return response.status(200).json(grupos);
  }
};
//------------------------------------------------------------------
// Criar um novo cadastro de Viagem com Acompanhante:
const createViagemAcompanhante = async (request, response) => {
  const createViagemAcompanhante = await viagemAModel.createViagemACompanhante(
    request.body
  );
  return response.status(201).json(createViagemAcompanhante);
};
//------------------------------------------------------------------
// Alterar um cadastro de Viagem com Acompanhante:
const updateViagemAcompanhante = async (request, response) => {
  const { id } = request.params;
  await viagemAModel.updateViagemAcompanhante(id, request.body);
  return response.status(204).json();
};
//------------------------------------------------------------------

module.exports = {
  getID,
  getNome,
  getViagens,
  createViagemAcompanhante,
  updateViagemAcompanhante,
};
