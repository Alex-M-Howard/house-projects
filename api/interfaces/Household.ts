import { Project } from "./Project";
import { Room } from "./Room";
import { User } from "./User";


export interface Household {
  id: number;
  admins: Array<User>;
  members: Array<User>;
  name: string;
  projects: Array<Project>;
  rooms: Array<Room>;
}