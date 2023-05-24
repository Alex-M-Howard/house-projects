import { User } from "../interfaces/User";

export const userByEmail = async (email: string): Promise<User | null> => {
  return {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "test@test.com",
    password: "password",
    createdAt: new Date()
  }
};
