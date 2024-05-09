//------------------------------------------------------------------
// Validar os campos do Formulario Veiculo:

const validateFieldMarca = (request, response, next) => {
  const { body } = request;

  if (body.marca === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Marca é obrigatório." });
  }

  if (body.marca === "") {
    return response
      .status(400)
      .json({ message: "O campo Marca não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldModelo = (request, response, next) => {
  const { body } = request;

  if (body.modelo === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Modelo é obrigatório." });
  }

  if (body.modelo === "") {
    return response
      .status(400)
      .json({ message: "O campo Modelo não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldPlaca = (request, response, next) => {
  const { body } = request;

  if (body.placa === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Placa do veiculo é obrigatório." });
  }

  if (body.placa === "") {
    return response
      .status(400)
      .json({ message: "O campo Placa do veiculo não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldCAP = (request, response, next) => {
  const { body } = request;

  if (body.capacidade === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Capacidade é obrigatório." });
  }

  if (body.capacidade === "") {
    return response
      .status(400)
      .json({ message: "O campo Capacidade não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
const validateFieldKM = (request, response, next) => {
  const { body } = request;

  if (body.km_atual === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Kilometragem é obrigatório." });
  }

  if (body.km_atual === "") {
    return response
      .status(400)
      .json({ message: "O campo Kilometragem não pode estar vazio." });
  }

  next();
};
//------------------------------------------------------------------
module.exports = {
  validateFieldMarca,
  validateFieldModelo,
  validateFieldPlaca,
  validateFieldCAP,
  validateFieldKM,
};
