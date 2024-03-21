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
  user: any;
  error: ErrorResponse;
};

export type ErrorResponse = {
  status: number;
  message: string;
};

export type Leads = {
  companyId: string,
  title: string,
  items: [{
    name: string,
    description: string
  }]
}

export type OnlineUser = {
  userId: string;
  socketId: string;
}

export type Consumer = {
  _id?: string | number;
  companyId: string | number;
}

export type Obj = {
  [key: string]: any;
}

type DragInstance = {
  index: number;
  droppableId: number | string;
}

export type DragResult = { 
  source: DragInstance; 
  destination: DragInstance; 
  draggableId: number | string;
}