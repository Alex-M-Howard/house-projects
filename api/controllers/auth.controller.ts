import bcrypt from "bcrypt";
import { User } from "../interfaces/User";
import { userByEmail } from "../services/user.service";
import { getSignedKey } from "../helpers/auth-helpers";

export const login = async (body: User) => {
  let { email, password } = body;

  const user: User | null = await userByEmail(email);
  if (!user) throw new Error("User not found");

  if (user && password) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      return getSignedKey(email);
    }
  }

  throw new Error("Unable to authenticate user. Please try again.");
};
