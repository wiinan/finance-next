"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerFormSchema } from "../schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpAction } from "@/services/auth";
import { showAlertMessage } from "@/components/custom/alert";
import { useAuthContext } from "@/contexts/auth-context";

export function useRegisterHook() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { dispatch }: any = useAuthContext();
  const registerForm = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: "",
      password: "",
      cpfCnpj: "",
      name: "",
      confirmPassword: "",
    },
  });

  async function signUp(
    data: z.infer<typeof registerFormSchema>
  ): Promise<void> {
    try {
      const response = await signUpAction(data);

      if (!response.message) {
        dispatch({
          type: "SET_AUTH_DATA",
          payload: {
            email: data.email,
            passowrd: data.password,
          },
        });
        return;
      }

      showAlertMessage("Campos preenchidos inválidos.", "warning");

      registerForm.control.setError("email", { message: "" });
      registerForm.control.setError("password", { message: "" });
      registerForm.control.setError("confirmPassword", { message: "" });
      registerForm.control.setError("name", { message: "" });
      registerForm.control.setError("cpfCnpj", { message: "" });
    } catch (error) {
      console.log(error);
      showAlertMessage("Algum erro aconteceu, tente novamente.", "warning");
    }
  }

  return { registerForm, signUp };
}
