//------------------------------------------------------------------
// Validar os campos do Formulario de Usuario:

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
//------------------------------------------------------------------
const validateFieldEmail = (request, response, next) => {
  const { body } = request;

  if (body.email === undefined) {
    return response
      .status(400)
      .json({ message: "O campo E-mail é obrigatório." });
  }

  if (body.email === "") {
    return response
      .status(400)
      .json({ message: "O campo E-mail não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldSenha = (request, response, next) => {
  const { body } = request;

  if (body.senha === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Senha é obrigatório." });
  }

  if (body.senha === "") {
    return response
      .status(400)
      .json({ message: "O campo Senha não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldDATA = (request, response, next) => {
  const { body } = request;

  if (body.data === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Data é obrigatório." });
  }

  if (body.data === "") {
    return response
      .status(400)
      .json({ message: "O campo Data não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldMatricula = (request, response, next) => {
  const { body } = request;

  if (body.matricula === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Matricula é obrigatório." });
  }

  if (body.matricula === "") {
    return response
      .status(400)
      .json({ message: "O campo Matricula não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
module.exports = {
  validateFieldNome,
  validateFieldEmail,
  validateFieldSenha,
  validateFieldDATA,
  validateFieldMatricula,
};
