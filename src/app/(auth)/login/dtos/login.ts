export type UserDataDto = {
  id: number;
  name: string;
  email: string;
  incomeBalance: number;
  expenseBalance: number;
  receivedBalance: number;
  provider: string;
  isDeleted: boolean;
  isRoot: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type SignInResponseDto = {
  user: UserDataDto;
  token: string;
  message?: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type signUpDataDto = {
  email: string;
  cpfCnpj: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export type LoginResponseDto = {
  message: string;
};
