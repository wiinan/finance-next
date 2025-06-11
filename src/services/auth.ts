"use server";

import { cookies } from "next/headers";
import { setCookie } from "cookies-next/server";
import {
  LoginResponseDto,
  SignInData,
  SignInResponseDto,
  signUpDataDto,
} from "@/app/(auth)/login/dtos/login";
import { post } from "@/commons/lib/fetch";
import dayjs from "dayjs";
import { LoginDataDto } from "@/app/(auth)/login/dtos/auth";

export const signInAction = async (
  data: SignInData
): Promise<LoginResponseDto> => {
  const response = await post<LoginResponseDto>("user/login", data);

  return response;
};

export const signUpAction = async (data: signUpDataDto) => {
  const response = await post<SignInResponseDto>("user", data);

  return response;
};

export const authenticateAction = async (
  data: LoginDataDto
): Promise<SignInResponseDto> => {
  const EXPIRATION_TOKEN = 60 * 6 * 24;
  const response = await post<SignInResponseDto>("user/authenticate", data);

  if (!response?.token) {
    return response;
  }

  await setCookie("token", response.token, {
    maxAge: EXPIRATION_TOKEN,
    expires: dayjs().add(1, "day").toDate(),
    cookies,
  });

  return response;
};
