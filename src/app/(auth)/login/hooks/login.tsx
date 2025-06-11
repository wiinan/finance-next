"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { showAlertMessage } from "@/components/custom/alert";
import { loginFormSchema } from "../schema/auth";
import { signInAction } from "@/services/auth";
import { useAuthContext } from "@/contexts/auth-context";

export function useLoginHook() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { dispatch }: any = useAuthContext();

  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = async (
    data: z.infer<typeof loginFormSchema>
  ): Promise<void> => {
    try {
      const response = await signInAction(data);

      if (!response?.message) {
        dispatch({ type: "SET_AUTH_DATA", payload: data });
        return;
      }

      showAlertMessage("Email ou senha invalidos.", "warning");

      loginForm.control.setError("email", { message: "" });
      loginForm.control.setError("password", { message: "" });
    } catch (error) {
      console.log(error);
      showAlertMessage("Algum erro aconteceu, tente novamente.", "warning");
    }
  };

  return { signIn, loginForm };
}
