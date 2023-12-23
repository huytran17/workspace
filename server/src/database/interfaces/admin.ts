export default interface IAdmin {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  address: IAdminAddress;
  hash_password: string;
  ip?: object;
  type: AdminType;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface IAdminAddress {
  province: string;
  district: string;
  commune: string;
  house_number?: string;
  note?: string;
}

export enum AdminType {
  OWNER = "OWNER",
  COLLABORATOR = "COLLABORATOR",
}
