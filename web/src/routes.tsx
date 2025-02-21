import { ReactNode } from "react";
import { Navigate } from "react-router";
// import { useAuthWithContext } from "./hooks/useAuthWithContext";
import { useAuthWithRedux } from "./hooks/useAuthwithRedux";

export function RequireAuth({ children }: { children: ReactNode }) {
  // const { user } = useAuthWithContext();
  const { user } = useAuthWithRedux();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
