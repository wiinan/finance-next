"use client";

import { otpFormSchema } from "@/app/(auth)/login/schema/auth";
import { showAlertMessage } from "@/components/custom/alert";
import { useAuthContext } from "@/contexts/auth-context";
import { authenticateAction } from "@/services/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useAuthHook() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { state, dispatch }: any = useAuthContext();
  const router = useRouter();
  const authForm = useForm<z.infer<typeof otpFormSchema>>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: {
      email: state?.email,
      password: state?.password,
      token: "",
    },
  });

  const authenticate = async (
    data: z.infer<typeof otpFormSchema>
  ): Promise<void> => {
    const response = await authenticateAction(data);

    if (!response?.message) {
      router.replace("/home");
      return;
    }

    showAlertMessage("Código inválido.", "warning");
    authForm.control.setError("token", {
      message: "Código de authenticação inválido",
    });
  };

  const onBackAuthScreen = () => {
    dispatch({ type: "ON_AUTH_CLEAR" });
  };

  return { authData: state, authForm, authenticate, onBackAuthScreen };
}
