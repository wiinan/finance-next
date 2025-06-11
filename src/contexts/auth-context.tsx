import { AuthStateDto } from "@/app/(auth)/login/dtos/auth";
import { createContext, useContext } from "react";

export const AuthContext = createContext<AuthStateDto>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}
