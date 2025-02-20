import React, { useContext, useEffect, useState } from "react";
// import Head from 'next/head';
// import Link from 'next/link';
import { SubmitHandler, useForm } from "react-hook-form";
import { CircularProgress } from "@mui/material";
// import { AuthContext } from '@contexts/authContext';
// import { LoginProps } from '@typography/interfaces';

import "./SignIn.css";
// import { Link } from 'react-router-dom';
import { SignInData } from "../../types";
import { AuthContext } from "../../contexts/auth/AuthContext";

// import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../Copyright";

const defaultTheme = "";

export default function SignIn(): JSX.Element {
  const { signIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm<SignInData>();
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    localStorage.setItem("persist", JSON.stringify(checked));
  }, [checked]);

  const handleSignIn: SubmitHandler<SignInData> = async (data) => {
    setIsLoading(true);
    setError("");

    const response = await signIn({
      email: data.email,
      password: data.password,
    });
    
    if (response?.status === 401 || response?.status === 400) {
      setError(response.message);
      setIsLoading(false);
    }

    if (response?.status === 500) {
      setError(response.message);
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleSignIn)}
            // noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de e-mail"
              autoComplete="email"
              type="email"
              autoFocus
              {...register("email")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password")}
            />
            {/* error message */}
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <FormControlLabel
              control={
                <Checkbox
                  value="persist"
                  color="primary"
                  onChange={() => {
                    setChecked(!checked);
                  }}
                />
              }
              label="Mantenha-me conectado"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="/sign-up" variant="body2">
                    {"Cadastrar"}
                </Link>
                </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
