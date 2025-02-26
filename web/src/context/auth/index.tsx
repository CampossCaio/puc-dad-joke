import AuthService, { SignInParams, User } from "@src/services/AuthService";
import { createContext, ReactNode, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextProps = {
  user: User | null;
  signin: (params: SignInParams) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  // Adicione o restante do código para que seja possível disponibilizar uma função
  // de login e o usuário para o contexto de autenticação

  return (
    <AuthContext.Provider value={{} as AuthContextProps}>
      {children}
    </AuthContext.Provider>
  );
}
