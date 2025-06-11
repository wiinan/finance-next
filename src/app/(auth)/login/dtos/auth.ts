export type AuthActionDto = {
  type: "SET_AUTH_DATA" | "ON_AUTH_CLEAR";
  payload: { email: string; password: string };
};

export type LoginDataDto = {
  email?: string;
  password?: string;
  token?: string;
};

export type AuthStateDto = LoginDataDto | null;
