// Validar os campos do Formulario de Viagem:

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

module.exports = {
  validateFieldData,
};
