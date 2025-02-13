# PUC DAD JOKES

PUC DAD JOKES é uma aplicação onde é possível adicionar piadas, gerar piadas aleatórias e buscar por piadas cadastradas. O projeto é dividido em duas partes: web desenvolvida com React e uma api construído com Node.js.

## Tecnologias Utilizadas

- **Frontend:** React
- **Backend:** Node.js com Fastify
- **Banco de Dados:** SQLite
- **Querybuilder:** Knex.js

## Como Rodar o Projeto

### 1. Executando o Backend

1. Acesse a pasta da API:
   ```sh
   cd api
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Gere as migrations para criar as tabelas no banco de dados:
   ```sh
   npm run knex -- migrate:latest
   ```
4. Popule o banco de dados com dados iniciais (seeds):
   ```sh
   npm knex seed:run
   ```
5. Inicie o servidor:
   ```sh
   npm run dev
   ```
   O backend estará rodando em: `http://localhost:3333`

### 2. Executando o Frontend

1. Acesse a pasta do frontend:
   ```sh
   cd web
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o ambiente de desenvolvimento:
   ```sh
   npm run dev
   ```

Agora, a aplicação estará rodando e pronta para uso!

## Informações sobre Exercícios

As informações sobre cada exercício estarão no diretório `web/exercises`.
