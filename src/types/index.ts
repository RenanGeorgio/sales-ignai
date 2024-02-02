export type User = {
  name: string;
  email: string;
};

export type SignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: number | string;
  user: {};
  error: ErrorResponse;
};

export type ErrorResponse = {
  status: number;
  message: string;
};
