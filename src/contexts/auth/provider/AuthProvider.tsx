import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { SignInData, SignInResponse, User } from "../../../types";
import authApi from "../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { persistor, sessionActions, userActions } from "../../../store/store";
import { useApi } from "../../../hooks/useApi";
import cookies from "js-cookie";

export function AuthProvider({ children }) {
  // const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = useApi();

  const isAuthenticated = useSelector((state: any) => state.session.status)
  const userState = useSelector((state: any) => state.user)

  const [isOffline, setIsOffline] = useState(false); // todo: implementar lógica de offline, caso necessário
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    if(isAuthenticated) {
     setUser(userState);
    }
  }, [userState, isAuthenticated]);

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
    persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });
    navigate("/sign-in");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
