import { v4 } from "uuid";
import { IUser } from "../types";

export class User {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  constructor(
    user: IUser
  ) {
      this.id = v4();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.password = user.password;
  }
}
