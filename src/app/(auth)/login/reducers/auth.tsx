import { AuthActionDto, AuthStateDto } from "../dtos/auth";

export function changeAuthData(state: AuthStateDto, action: AuthActionDto) {
  switch (action.type) {
    case "SET_AUTH_DATA":
      return action.payload;
    case "ON_AUTH_CLEAR":
      return null;
    default:
      return state;
  }
}
