import React, { useContext, useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CircularProgress } from '@mui/material';
// import { AuthContext } from '@contexts/authContext';
// import { LoginProps } from '@typography/interfaces';

import './SignIn.css'
import { Link } from 'react-router-dom';
import { SignInData } from '../../types';
import { AuthContext } from '../../context/authContext';

export default function SignIn(): JSX.Element {
    const { signIn } = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { register, handleSubmit } = useForm<SignInData>();
  
    const handleSignIn: SubmitHandler<SignInData> = async (data) => {
        setIsLoading(true);
        setError('');
        console.log(data.email)
        const response = await signIn({ email: data.email, password: data.password });
   
        if (response?.status === 401 || response?.status === 400) {
            setError(response.message);
            setIsLoading(false);
        }

        if (response?.status === 500) {
            setError(response.message);
            setIsLoading(false);
        }
    }

  return (
        <div className='wrapper'> 
            <div className='container'>
                <div className='title'>
                    <h2>Login</h2>
                </div>
                <form className='form' onSubmit={handleSubmit(handleSignIn)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div >
                        <div className='inputGroup'>
                            <label htmlFor="email-address" className='labelEmail'>Email</label>
                            <input
                                {...register('email')}
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className='input'
                            />
                        </div>
                        <div className='inputGroup'>
                            <label htmlFor="password" className='labelPassword'>Senha</label>
                            <input
                                {...register('password')}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className='input'
                            />
                        </div>
                        <div className='containerRemember'>
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"                               
                            />
                            <label htmlFor="remember_me" >Lembrar de mim</label>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-xs italic">{error}</p>}
                    <div >
                        <div className='forgotPass'>
                            {/* <Link href="/forgot-password">Esqueceu a senha?</Link> */}
                        </div>
                    </div>
                    <div className='btnContainer'>
                        <button type="submit" className='btnEntrar'>  
                            { isLoading ? <CircularProgress size={16} /> : 'EntWrar' }
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}