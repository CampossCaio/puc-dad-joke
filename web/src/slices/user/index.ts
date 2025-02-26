import { createSlice } from "@reduxjs/toolkit";
import { User } from "@src/services/AuthService";

type UserInitialState = {
  user: User | null;
};

const initialState: UserInitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Crie um reducer para adicionar o usuário ao estado global.
    // Obs: o nome que você der a função será o mesmo nome da action que será retornada.
    // exemplo: addUser retornará uma action addUser -> export const { addUser } = userSlice.actions;
  },
});

// Obtenha e exporte a action de adição de usuário. Você pode
// acessá-la através do slice de usuário. Deixei uma dica do comentário do reducer acima :)

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
