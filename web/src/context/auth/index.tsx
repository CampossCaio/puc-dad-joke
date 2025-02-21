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
  const [user, setUser] = useState<User | null>(null);

  const signin = async ({ email, password }: SignInParams) => {
    const user = await AuthService.signin({ email, password });
    setUser(user);
  };

  const value = { user, signin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
