import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authContext";
import { SignInData, SignInResponse, User } from "../../../types";
import { recoverUserInformation, signInRequest } from "../../provider/auth";
import authApi from "../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { sessionActions, userActions } from "../../../store/store";
import { useApi } from "../../../hooks/useApi";
import cookies from "js-cookie";

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = useApi();

  const isAuthenticated = useSelector((state: any) => state.session.status)

  async function signIn({ email, password }: SignInData) {
    const { token, error }: SignInResponse | any = await api.signIn({
      email,
      password,
    });

    if (error) {
      return error;
    }
    
    cookies.set("token", token, { expires: 0.5 });
    dispatch(sessionActions.signIn());
    navigate("/");
  }

  const signOut = () => {
    cookies.remove("token", { path: "/" });
    dispatch(sessionActions.signOut());
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
