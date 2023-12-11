export default interface IPasswordReset {
  _id: string;
  email: string;
  code: number;
  created_at: Date;
  updated_at: Date;
  expires_at: Date;
}
