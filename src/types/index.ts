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

export type Leads = {
  companyId: string,
  topic: string,
  lead: {
    name: string,
    description: string
  }
}

export type OnlineUser = {
  userId: string;
  socketId: string;
}

export type Consumer = {
  _id?: string | number;
  companyId: string | number?
}