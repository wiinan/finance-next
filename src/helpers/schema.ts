import { z } from "zod";

export const ZOD_EMAIL_REQUIRED = z
  .string()
  .email("Preencha com um email válido.");
export const ZOD_STRING_REQUIRED = z
  .string()
  .min(1, "O campo precisa ser preenchido");
