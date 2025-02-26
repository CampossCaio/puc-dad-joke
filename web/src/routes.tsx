import { ReactNode } from "react";
import { Navigate } from "react-router";

import { User } from "./services/AuthService";

export function RequireAuth({
  children,
  user,
}: {
  children: ReactNode;
  user: User | null;
}) {
  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}
