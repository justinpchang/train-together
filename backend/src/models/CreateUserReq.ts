export interface CreateUserReq {
  name: string;
  email: string;
  dob: Date;
  interests: Array<string>;
}
