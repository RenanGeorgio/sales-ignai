import authApi from "../services/auth";

type SignInRequestData = {
  email: string;
  password: string;
};

type RecoveryData = {
  email: string;
};

export const useApi = () => ({
  signIn: async (data: SignInRequestData) => {
    try {
      const response = await authApi("/auth/login", {
        method: "POST",
        data: data,
      });

      if (response.status === 200) {
        const { token } = response.data;
        return {
          token: token
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
  },
});