import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const getSignedKey = (email: string) => {
  return jwt.sign({ email }, process.env.SECRET_KEY);
}
