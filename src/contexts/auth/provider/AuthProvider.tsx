import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { persistor, sessionActions } from "@store/store";
import { useApi } from "@hooks/useApi";
import cookies from "js-cookie";
import { SignInData, SignInResponse, User } from "@types";

export function AuthProvider({ children }: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const api = useApi();

  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = useSelector((state: any) => state.session.status)
  const userState = useSelector((state: any) => state.user)
  
  useEffect(() => {
    if(isAuthenticated) {
     setUser(userState);
    }
  }, [userState, isAuthenticated]);

  async function signIn({ email, password }: SignInData) {
    // @ts-ignore
    const { token, error }: SignInResponse = await api.signIn({
      email,
      password,
    });

    if (error) {
      return error;
    }
    
    cookies.set("token", token as string, { expires: 0.5 });
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