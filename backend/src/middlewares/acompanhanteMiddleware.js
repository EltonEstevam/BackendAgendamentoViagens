// Validar o campo Nome do acompanhante:
const validateFieldNome = (request, response, next) => {
  const { body } = request;

  if (body.nome_acompanhante === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Nome do acompanhante é obrigatório." });
  }

  if (body.nome_acompanhante === "") {
    return response
      .status(400)
      .json({ message: "O campo Nome do acompanhante não pode estar vazio." });
  }

  next();
};

// Validar o campo RG do acompanhante:
const validateFieldRG = (request, response, next) => {
  const { body } = request;

  if (body.rg_acompanhante === undefined) {
    return response
      .status(400)
      .json({ message: "O campo RG do acompanhante é obrigatório." });
  }

  if (body.rg_acompanhante === "") {
    return response
      .status(400)
      .json({ message: "O campo RG do acompanhante não pode estar vazio." });
  }

  next();
};

// Validar o campo SUS do acompanhante:
const validateFieldSUS = (request, response, next) => {
  const { body } = request;

  if (body.sus_acompanhante === undefined) {
    return response
      .status(400)
      .json({ message: "O campo SUS do acompanhante é obrigatório." });
  }

  if (body.sus_acompanhante === "") {
    return response
      .status(400)
      .json({ message: "O campo SUS do acompanhante não pode estar vazio." });
  }

  next();
};

// Validar o campo Data de Nascimento do acompanhante:
const validateFieldDataNascimento = (request, response, next) => {
  const { body } = request;

  if (body.data_nascimento === undefined) {
    return response
      .status(400)
      .json({
        message: "O campo Data de Nascimento do acompanhante é obrigatório.",
      });
  }

  if (body.data_nascimento === "") {
    return response
      .status(400)
      .json({
        message:
          "O campo Data de Nascimento do acompanhante não pode estar vazio.",
      });
  }

  next();
};

module.exports = {
  validateFieldNome,
  validateFieldRG,
  validateFieldSUS,
  validateFieldDataNascimento,
};
