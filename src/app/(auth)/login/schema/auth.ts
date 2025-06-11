import { ZOD_EMAIL_REQUIRED, ZOD_STRING_REQUIRED } from "@/helpers/schema";
import { z } from "zod";

export const loginFormSchema = z
  .object({
    email: ZOD_EMAIL_REQUIRED,
    password: ZOD_STRING_REQUIRED,
  })
  .strict();

export const registerFormSchema = z
  .object({
    name: ZOD_STRING_REQUIRED,
    email: ZOD_EMAIL_REQUIRED,
    password: ZOD_STRING_REQUIRED,
    confirmPassword: ZOD_STRING_REQUIRED,
    cpfCnpj: ZOD_STRING_REQUIRED,
  })
  .strict()
  .refine(
    ({ password, confirmPassword }) => password === confirmPassword,
    "As senhas estão diferentes."
  );

export const otpFormSchema = z
  .object({
    email: ZOD_EMAIL_REQUIRED,
    password: ZOD_STRING_REQUIRED,
    token: ZOD_STRING_REQUIRED,
  })
  .strict();
