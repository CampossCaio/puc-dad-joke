# Exercício 2: Gerenciamento de Estado com Context API e Redux

## Introdução

Para acessarem o exercício, vocês deverão acessar a branch `exercise-02` com o comando:

```sh
 git checkout exercise-02
```

Para acessarem a solução desenvolvida em aula, basta acessar a branch `exercise-02-solution`. Eu recomendo que tentem fazer sozinhos antes de consultarem a solução.

## Objetivo do Exercício

Praticar os conceitos aprendidos em aula sobre gerenciamento de estado com Context API e Redux, aplicando-os na refatoração da funcionalidade de autenticação da aplicação.

## Refatorando a Autenticação

A aplicação atual utiliza uma funcionalidade de autenticação onde o usuário precisa estar autenticado para poder submeter piadas. Atualmente, há um usuário hardcoded no `AuthService`, sendo:

- **E-mail:** `puc@gmail.com`
- **Senha:** `123456`

O usuário precisa estar disponível em várias partes da aplicação, como:

- Header
- Página de Sign In
- Componente de rotas protegidas (`RequireAuth`)

Atualmente, esse usuário está armazenado em um estado no arquivo `App.tsx` e é repassado via propriedade para os componentes que precisam dele. No entanto, isso é uma má prática chamada **prop drilling** no React.

### Objetivo da Refatoração

Refatorar a aplicação para que o usuário e as funções referentes a ele sejam armazenadas em um **estado global**, permitindo que qualquer componente possa acessá-lo sem precisar recebê-lo via props.

Vocês deverão implementar **ambos** os métodos de gerenciamento de estado:

- **Context API**
- **Redux**

Deverão ser disponibilizados dois **hooks** para que possamos escolher qual método de gerenciamento utilizar, conforme foi demonstrado em aula.

## Implementação do Estado Global

A aplicação já possui um contexto de autenticação pré-criado em `context/auth`. Vocês deverão completá-lo. Há também dois hooks pré-criados na pasta `hooks`: `useAuthWithContext` e `useAuthWithRedux`. Vocês também deverão completá-los. Além disso, será necessário completar o slice de usuário na pasta `slices/user`.

Depois de ajustar essas partes, refatore a aplicação para utilizá-las ao invés de repassar o usuário via propriedade.

## Boa Sorte!

Vocês podem reassistir a aula e acessar a solução caso tenham dúvidas. Bom código!
