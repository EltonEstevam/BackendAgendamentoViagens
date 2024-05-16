//------------------------------------------------------------------
// Validar o campo Data do Formulario de Viagem:

const validateFieldData = (request, response, next) => {
  const { body } = request;

  if (body.data_select === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Data da Viagem é obrigatório." });
  }

  if (body.data_select === "") {
    return response
      .status(400)
      .json({ message: "O campo Data da Viagem não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
// Validar o Campo Hora do Formulario de Viagem:

const validateFieldHora = (request, response, next) => {
  const { body } = request;

  if (body.hora_select === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Hora da Viagem é obrigatório." });
  }

  if (body.hora_select === "") {
    return response
      .status(400)
      .json({ message: "O campo Hora da Viagem não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.nome_paciente === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Nome do paciente é obrigatório." });
  }

  if (body.nome_paciente === "") {
    return response
      .status(400)
      .json({ message: "O campo Nome do paciente não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
const validateFieldRG = (request, response, next) => {
  const { body } = request;

  if (body.rg_paciente === undefined) {
    return response
      .status(400)
      .json({ message: "O campo RG do paciente é obrigatório." });
  }

  if (body.rg_paciente === "") {
    return response
      .status(400)
      .json({ message: "O campo RG do paciente não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
const validateFieldTEL = (request, response, next) => {
  const { body } = request;

  if (body.tel_paciente === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Telefone do paciente é obrigatório." });
  }

  if (body.tel_paciente === "") {
    return response
      .status(400)
      .json({ message: "O campo Telefone do paciente não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
const validateFieldDES = (request, response, next) => {
  const { body } = request;

  if (body.destino === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Destino é obrigatório." });
  }

  if (body.destino === "") {
    return response
      .status(400)
      .json({ message: "O campo Destino não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
const validateFieldEND = (request, response, next) => {
  const { body } = request;

  if (body.end_destino === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Endereço de destino é obrigatório." });
  }

  if (body.end_destino === "") {
    return response
      .status(400)
      .json({ message: "O campo Endereço de destino não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
const validateFieldPON = (request, response, next) => {
  const { body } = request;

  if (body.ponto_paciente === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Ponto do paciente é obrigatório." });
  }

  if (body.ponto_paciente === "") {
    return response
      .status(400)
      .json({ message: "O campo Ponto do paciente não pode estar vazio." });
  }

  next();
};

//------------------------------------------------------------------
module.exports = {
  validateFieldData,
  validateFieldHora,
  validateFieldNome,
  validateFieldRG,
  validateFieldTEL,
  validateFieldDES,
  validateFieldEND,
  validateFieldPON,
};
