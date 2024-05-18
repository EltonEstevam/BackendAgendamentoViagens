# Sistema Agendamento de Viagens (backend)

## Projeto Integrador I Univesp.

# Tecnologias Utilizadas:

## Backend

- <a href="https://nodejs.org/en/"> NodeJS</a><img align="center" alt="NodeJS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
- <a href="https://expressjs.com/">Express</a><img align="center" alt="Express" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg">

## Database

- <a href="https://www.mysql.com/">MySQL</a><img align="center" alt="MySQL" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg">

<br>

# Como utilizar:

### Primeiro, precisamos clonar ou baixar este repositório.

```bash
# Comando para clonar o repositório:

$ git clone https://github.com/EltonEstevam/BackendAgendamentoViagens.git

```

### Instalar algumas dependências:

```bash

# \BackendAgendamentoViagens\backend> npm init -y
# \BackendAgendamentoViagens\backend> npm install express cors mysql2 dotenv
# \BackendAgendamentoViagens\backend> npm install nodemon -D
# \BackendAgendamentoViagens\backend> npm install dotenv --save-dev
# \BackendAgendamentoViagens\backend> npx eslint --init
Need to install the following packages:
eslint@8.57.0
Ok to proceed? (y) y
You can also run this command directly using 'npm init @eslint/config'.
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · commonjs
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No
√ Where does your code run? · node
√ How would you like to define a style for your project? · prompt
√ What format do you want your config file to be in? · JSON
√ What style of indentation do you use? Tabs
√ What style of indentation do you use? · 2
√ What quotes do you use for strings? · double
√ What line endings do you use? · windows
√ Do you require semicolons? · No / Yes
The config that you've selected requires the following dependencies:
eslint@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
Installing eslint@latest

```

### Modificada a conexão com o servidor para SSL:

```bash
npm install https

```

### Atenção a partir da versão: 1.0.6, todas as requisições para o servidor devem ser com https://

### Em ambiente de desenvolvimento deve ser desativar a validação do certificado SSL.

### Corrigido algumas vulnerabilidades do mysql2

```bash
npm audit fix

```

### Após clonar o repositório, é necessário criar um banco de dados MySQL.

```bash
# Comando para criar um banco de dados MySQL no terminal:

$ CREATE DATABASE agendamentos;
```

### A seguir é necessário criar as tabelas que serão utilizadas pela aplicação.

```bash

## TABELA USUÁRIO ##

$ CREATE TABLE `agendamentos`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `confirma` VARCHAR(45) NOT NULL,
  `matricula` VARCHAR(45) NOT NULL,
  `roles` INT,
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

# Sobre os niveis de usuario do sistema:
Nivel: 1 Operador
Nivel: 2 Admin

## TABELA VIAGEM ##

$ CREATE TABLE `agendamentos`.`viagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_select` DATE NOT NULL,
  `hora_select` TIME NOT NULL,
  `nome_paciente` VARCHAR(255) NOT NULL,
  `rg_paciente` VARCHAR(45) NOT NULL,
  `tel_paciente` VARCHAR(15) NOT NULL,
  `destino` VARCHAR(255) NOT NULL,
  `end_destino` VARCHAR(255) NOT NULL,
  `ponto_paciente` VARCHAR(255) NOT NULL,
  `obs` TEXT(500),
  `ac` INT NOT NULL,
  `ac_id` INT,
  PRIMARY KEY (`id`)) ENGINE=InnoDB;

## TABELA ACOMPANHANTE ##

$ CREATE TABLE `agendamentos`.`acompanhante` (
`id` INT NOT NULL AUTO_INCREMENT,
`nome_acompanhante` VARCHAR(255) NOT NULL,
`rg_acompanhante` VARCHAR(45) NOT NULL,
`end_acompanhante` VARCHAR(255) NOT NULL,
`ponto_acompanhante` VARCHAR(255) NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;

## TABELA MOTORISTA ##

$ CREATE TABLE `agendamentos`.`motorista` (
`id` INTEGER NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(255)NOT NULL,
`cnh` VARCHAR(25)NOT NULL,
`matricula` VARCHAR(100)NOT NULL,
`telefone` VARCHAR(15)NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;

## TABELA VEICULOS ##

$ CREATE TABLE `agendamentos`.`veiculo` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL,
    placa VARCHAR(10) UNIQUE NOT NULL,
    capacidade INT NOT NULL,
    km_atual DECIMAL (6,3),
    obs TEXT(500)) ENGINE=InnoDB;

```

### Na raiz do projeto haverá um arquivo chamado ".env.example"

### este arquivo contém 5 campos que deverão ser preenchidos em um arquivo chamado ".env",

### basta criar este arquivo ou renomear o arquivo de exemplo.

### Depois, basta preencher os campos com os dados referentes ao seu banco de dados.

```bash
PORT= [Porta em que o servidor será executado]
MYSQL_HOST= [O host da sua máquina, por padrão é 'localhost']
MYSQL_USER= [Seu nome de usuário, por padrão o MySQL usa o usuário 'root']
MYSQL_PASSWORD= [A senha que você escolheu ao instalar o MySQL]
MYSQL_DB= [O nome do banco de dados criado anteriormente.]
```

### Antes de iniciar a aplicação, precisamos instalar o 'node_modules'

### e para isso basta abrir um terminal na pasta "backend"

### (é aconselhável utilizar o terminal do editor/IDE).

```bash
# Comando para baixar o 'node_modules'

$ npm install
```

### Por fim, basta executar o comando para iniciar o servidor (ainda dentro da pasta “backend”).

```bash
# Comando para iniciar o servidor.

$ npm start
```

### Modo debug do Servidor.

```bash
# Comando para iniciar o servidor em modo debug.

$ npm run dev
```

<br/>

# Referências:

### Manual do Dev

- <a href="https://github.com/manualdodev"> GitHub

# Colaboradores:

- <a href="https://github.com/Edsonflaviobr"> Edson Flavio
  <br/>
- <a href="https://github.com/EltonEstevam"> Elton Estevam
  <br/>
- <a href="https://github.com/MateusFerreira2648"> Mateus Ferreira
