// ---------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------
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
// ---------------------------------------------------------------------------
// Validar o campo Endereço do acompanhante:
const validateFieldEND = (request, response, next) => {
  const { body } = request;

  if (body.end_acompanhante === undefined) {
    return response
      .status(400)
      .json({ message: "O campo Endereço do acompanhante é obrigatório." });
  }

  if (body.end_acompanhante === "") {
    return response.status(400).json({
      message: "O campo Endereço do acompanhante não pode estar vazio.",
    });
  }

  next();
};
// ---------------------------------------------------------------------------
// Validar o campo Ponto do acompanhante:
const validateFieldPonto = (request, response, next) => {
  const { body } = request;

  if (body.ponto_acompanhante === undefined) {
    return response.status(400).json({
      message: "O campo Ponto do acompanhante é obrigatório.",
    });
  }

  if (body.ponto_acompanhante === "") {
    return response.status(400).json({
      message: "O campo Ponto do acompanhante não pode estar vazio.",
    });
  }

  next();
};
// ---------------------------------------------------------------------------
module.exports = {
  validateFieldNome,
  validateFieldRG,
  validateFieldEND,
  validateFieldPonto,
};
