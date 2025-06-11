"use client";

import { getUserInfo } from "@/services/finance";
import { useEffect, useState } from "react";
import { UserDataDto } from "../../../(auth)/login/dtos/login";

export function useDashboardHook() {
  const [user, setUser] = useState<UserDataDto>();

  async function getUser(): Promise<void> {
    setUser(await getUserInfo());
  }

  useEffect(() => {
    getUser();
  }, []);

  return { user };
}
