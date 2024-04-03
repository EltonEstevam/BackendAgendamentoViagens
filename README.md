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

### Após clonar o repositório, é necessário criar um banco de dados MySQL e junto uma tabela que sera necessária.

```bash
# Comando para criar um banco de dados MySQL no terminal:

$ CREATE DATABASE agendamento;
```

### A seguir é necessário criar a tabela de “motorista” que será utilizada pela aplicação.

```bash

## TABELA USUÁRIO ##

$ CREATE TABLE `agendamentos`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `confirma` VARCHAR(45) NOT NULL,
  `data` DATE NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  `nivel` INT NOT NULL,
  PRIMARY KEY (`id`));

## TABELA VIAGEM ##

$ CREATE TABLE `agendamentos`.`viagem` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_select` DATE NOT NULL,
  `cartao_sus` VARCHAR(45) NOT NULL,
  `nome_paciente` VARCHAR(255) NOT NULL,
  `rg_paciente` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  `destino` VARCHAR(255) NOT NULL,
  `end_destino` VARCHAR(255) NOT NULL,
  `ponto` VARCHAR(255) NOT NULL,
  `obs` TEXT(500),
  `ac` INT NOT NULL,
  PRIMARY KEY (`id`));

## TABELA ACOMPANHANTE ##

$ CREATE TABLE `agendamentos`.`acompanhante` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_acompanhante` VARCHAR(255) NOT NULL,
  `rg_acompanhante` VARCHAR(45) NOT NULL,
  `sus_acompanhante` VARCHAR(45) NOT NULL,
  `data_nascimento` DATE NOT NULL,
  PRIMARY KEY (`id`));


## TABELA MOTORISTA ##

$ CREATE TABLE `agendamentos`.`motorista` (
`id` INTEGER NOT NULL AUTO_INCREMENT,
`nome` VARCHAR(255)NOT NULL,
`telefone` VARCHAR(12)NOT NULL,
`endereco` VARCHAR(255)NOT NULL,
`cnh` VARCHAR(25)NOT NULL,
PRIMARY KEY (`id`)) ENGINE=InnoDB;

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

<br>

# Referências:

### Manual do Dev

- <a href="https://github.com/manualdodev"> GitHub
