import { AuthContext } from "@src/context/auth";
import { useContext } from "react";

export function useAuthWithContext() {
  return useContext(AuthContext);
}
