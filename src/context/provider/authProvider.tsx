import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { setCookie, parseCookies, destroyCookie } from 'nookies';
import { AuthContext } from '../authContext';
import { SignInData, SignInResponse, User } from '../../types';
import { recoverUserInformation, signInRequest } from './auth';
import authApi from '../../services/auth';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/store';

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = !!user;

  // useEffect(() => {
  //   const { token } = parseCookies()

  //   if (token) {
  //     recoverUserInformation().then(response => {
  //       if(response?.user){
  //         setUser(response?.user);
  //       }
  //       if(response?.status === 401){
  //         destroyCookie(null, 'token', { path: '/'});
  //         navigate('/home');
  //       }
  //     }).catch(error => {
  //       console.log(error)
  //     })
  //   }

  //   const ignorePaths = ['/forgot-password', '/reset-password'];

  //   const path = ignorePaths.includes(window.location.href);

  //   if(!token && !path){
  //     navigate('/sign-in');
  //   }

  // }, []);
  
  async function signIn({ email, password }: SignInData) {
    const { token, user, error }: SignInResponse | any = await signInRequest(
      {
        email,
        password,
      });

    if(error){
      return error
    }

    setCookie(undefined, 'token', token, {
      maxAge: 60 * 60 * 8, // 8 horas
      path: '/'
    })

    authApi.defaults.headers['Authorization'] = `Bearer ${token}`;
    setUser(user);
    dispatch(userActions.updateUser(user));
    navigate('/');
  }

  const signOut = () => {
    destroyCookie(null, 'token', { path: '/'});
    navigate('/sign-in')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}