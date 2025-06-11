"use client";

import { AuthContext } from "@/contexts/auth-context";
import { LoginScreen } from "./login-screen";
import { useReducer } from "react";
import { changeAuthData } from "./reducers/auth";

export default function LoginPage() {
  const [state, dispatch] = useReducer(changeAuthData, null);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <LoginScreen />
    </AuthContext.Provider>
  );
}
