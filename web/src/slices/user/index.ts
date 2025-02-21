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
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
