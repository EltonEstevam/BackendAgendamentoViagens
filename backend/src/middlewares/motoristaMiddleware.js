// Validar o compo NOME:
const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.nome === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Nome é obrigatório." });
  }

  if (body.nome === "") {
    return response
      .status(400)
      .json({ message: "O campo Nome não pode estar vazio." });
  }

  next();
};

// Validar o campo CNH:
const validateFieldCNH = (request, response, next) => {
  const { body } = request;

  if (body.cnh === undefined) {
    return response.status(400).json({ message: "O campo CNH é requerido." });
  }

  if (body.cnh === "") {
    return response
      .status(400)
      .json({ message: "O campo CNH não pode estar vazio." });
  }

  next();
};

// Validar o campo Matricula:
const validateFieldMatricula = (request, response, next) => {
  const { body } = request;

  if (body.matricula === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Matricula é requerido." });
  }

  if (body.matricula === "") {
    return response
      .status(400)
      .json({ message: "O campo Matricula não pode estar vazio." });
  }

  next();
};

// Validar o compo Telefone:
const validateFieldFone = (request, response, next) => {
  const { body } = request;

  if (body.telefone === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Telefone é obrigatório." });
  }

  if (body.telefone === "") {
    return response
      .status(400)
      .json({ message: "O campo Telefone não pode estar vazio." });
  }

  next();
};

module.exports = {
  validateFieldNome,
  validateFieldFone,
  validateFieldMatricula,
  validateFieldCNH,
};
