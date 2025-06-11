"use server";

import { UserDataDto } from "@/app/(auth)/login/dtos/login";
import { get } from "@/commons/lib/fetch";

export const getUserInfo = async (): Promise<UserDataDto> => {
  const response = await get<UserDataDto, null>("user/profile");

  return response;
};

export const getFinances = async (filter: any): Promise<any> => {
  const response = await get<any, any>("finance", filter);

  return response;
};
