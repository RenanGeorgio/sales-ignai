import authApi from "../../services/auth";

import { AxiosError } from "axios";

type SignInRequestData = {
  email: string;
  password: string;
};

type RecoveryData = {
  email: string;
};

export async function signInRequest(data: SignInRequestData) {
  try {
    const response = await authApi("/login", {
      method: "POST",
      data: data,
    });

    console.log(response)

    if (response.status === 200) {
      console.log(response.data);
      const { user, token } = response.data;
      return {
        token: token,
        user: user,
      };
    }
  } catch (error: any) {
    if (error.response?.status === 401 || error.response?.status === 400) {
      return {
        error: {
          status: 401,
          message: "Usuário ou senha inválidos",
        },
      };
    } else {
      return {
        error: {
          status: 500,
          message: "Erro interno do servidor",
        },
      };
    }
  }
}

export async function recoverUserInformation() {
  try {
    const response = await authApi("/user/session", {
      method: "get",
    });

    if (response.status === 200) {
      const { user } = response.data;
      return {
        user: user,
      };
    }
  } catch (error: any) {
    if (error.response.status === 401) {
      return {
        status: 401,
        message: "Credenciais inválidas",
      };
    } else {
      return {
        status: 500,
        message: "Erro interno do servidor",
      };
    }
  }
}
