import { Context, createContext } from "react";
import { ErrorResponse, SignInData, User } from "../../types";

export interface AuthContextInterface {
  isAuthenticated: boolean;
  user: User | any;
  signIn: (data: SignInData) => Promise<void> | ErrorResponse;
  signOut: () => void;
}

export const AuthContext: Context<any> = createContext(
  {} as AuthContextInterface
);
