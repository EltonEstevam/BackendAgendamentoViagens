const connection = require("./connection");
//------------------------------------------------------------------
// Consultar Usuario por ID:
const getID = async (id) => {
  const [getUsuario] = await connection.execute(
    "SELECT * FROM usuario WHERE id = ?",
    [id]
  );
  return getUsuario;
};
//------------------------------------------------------------------
// Retorna todos os usuarios cadastrados.
const getAllUsuarios = async () => {
  const [usuarios] = await connection.execute("SELECT * FROM usuario");
  return usuarios;
};

const createUsuario = async (usuario) => {
  const { nome, email, senha, confirma, matricula, roles } = usuario;

  const query =
    "INSERT INTO usuario(nome, email, senha, confirma, matricula, roles) VALUES (?, ?, ?, ?, ?, ?)";

  const [createdUsuario] = await connection.execute(query, [
    nome,
    email,
    senha,
    confirma,
    matricula,
    roles,
  ]);
  return { insertId: createdUsuario.insertId };
};
//------------------------------------------------------------------
const deleteUsuario = async (id) => {
  const [removedUsuario] = await connection.execute(
    "DELETE FROM usuario WHERE id = ?",
    [id]
  );
  return removedUsuario;
};
//------------------------------------------------------------------
const updateUsuario = async (id, usuario) => {
  const { nome, email, senha, confirma, matricula, roles } = usuario;

  const query =
    "UPDATE usuario SET nome = ?, email = ?, senha = ?, confirma = ?, matricula = ?, roles = ? WHERE id = ?";

  const [updatedUsuario] = await connection.execute(query, [
    nome,
    email,
    senha,
    confirma,
    matricula,
    roles,
    id,
  ]);
  return updatedUsuario;
};
//------------------------------------------------------------------
//Validar Usuario com Email e Senha:
const validarUsuario = async (credenciais) => {
  const { email, senha } = credenciais;
  const query =
    "SELECT id,nome,email,roles FROM usuario WHERE email = ? AND senha = ?";
  const [Credencial] = await connection.execute(query, [email, senha]);
  return Credencial;
};

//------------------------------------------------------------------
module.exports = {
  getID,
  getAllUsuarios,
  createUsuario,
  deleteUsuario,
  updateUsuario,
  validarUsuario,
};
