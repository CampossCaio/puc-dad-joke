# Exercício 1: Comunicação entre Componentes, React Router e Integração com APIs

## Introdução

Para acessarem o exercício, vocês deverão acessar a branch `exercise-01` com o comando:

```sh
 git checkout exercise-01
```

Para acessarem a solução desenvolvida em aula, basta acessar a branch `exercise-01-solution`. Eu recomendo que tentem fazer sozinhos antes de consultarem a solução.

## Objetivo do Exercício

Praticar os conceitos aprendidos em aula, sobre comunicação entre componentes, roteamento e conexão com apis externas no React.

## Passos para Implementação

### 1. Configuração de Rotas

1. Instalar o React Router:
   ```sh
   npm install react-router
   ```
2. Configurar as rotas da aplicação para que funcionem corretamente. As rotas principais são:
   - Home
   - Search
   - Submit
3. Criar um layout para manter o header fixo em todas as rotas.

### 2. Integração com API

1. Instalar o Axios:
   ```sh
   npm install axios
   ```
2. Criar um arquivo `services/JokerService.ts` e implementar as seguintes funções:
   - Gerar uma piada aleatória
   - Criar uma nova piada
   - Buscar todas as piadas, com opção de filtro por query

### 3. Endpoints da API

- Buscar piadas:
  ```sh
  GET http://localhost:3333/joke
  ```
  Pode receber o query param `query`, por exemplo:
  ```sh
  GET http://localhost:3333/joke?query=dad
  ```
- Buscar piada aleatória:
  ```sh
  GET http://localhost:3333/joke/random
  ```
- Criar uma nova piada:
  ```sh
  POST http://localhost:3333/joke
  ```

> É interessante consultar as rotas diretamente na API para aprender a explorar APIs sem documentação detalhada.

### 4. Implementação das Páginas

Cada funcionalidade deverá ser implementada em `src/pages`, conforme fizemos na aula:

- **Home:** Exibir uma piada aleatória.
- **Search Joke:** Listar todas as piadas e permitir a busca por piadas específicas.
- **Submit:** Criar uma nova piada.

### 5. Funcionalidades esperadas

Ao fim do exercício, espera-se que as seguintes funcionalidades estejam implementadas:

- Navegação entre as rotas.
- Geração de piada aleatória na Home.
- Listagem de piadas na Search Joke, com opção de busca.
- Criação de novas piadas na página Submit.
- Funcionalidade de copiar as piadas para a área de transferência.

### 6. Extras (Opcional)

- Implementar feedbacks com toast.
- Adicionar tratamentos de erros para aprimorar a experiência do usuário.

## Boa Sorte!

Vocês podem reassistir a aula e acessar a solução caso tenham dúvidas. Bom código!
