export interface IClient {
  _id: string;
  name: string;
  email: string;
  tel: string;
  priority: string;
  sector: string;
  status?: boolean;
  companyId: string;
  contact?: IContact;
};

export interface IContact {
  contactInfo: IContactInfo[];
  address: IAddress[];
}

export interface IContactInfo {
  _id?: string;
  client: string;
  contactName: string;
  email: string;
  status: boolean;
  tel: string;
  state: string;
};

export interface IAddress {
  client: string;
  name: string;
  street: string;
  number: Number;
  district: string;
  city: string;
  state: string;
  zipCode: number;
  isMain: boolean;
};