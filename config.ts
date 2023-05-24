import dotenv from "dotenv";
import "colors";

dotenv.config();

const SECRET_KEY: string = process.env.SECRET_KEY || "secret-dev";
const PGUSER: string = process.env.PGUSER || "postgres";
const PGPASSWORD: string = process.env.PGPASSWORD;
const PGHOST: string = process.env.PGHOST || "localhost";
const PGPORT: number = parseInt(process.env.PGPORT) || 5432;
const API_PORT: number = parseInt(process.env.API_PORT) || 3000;
const PGDATABASE: string = process.env.NODE_ENV === "test" ? "house-project-test" : process.env.PGDATABASE;
const BCRYPT_WORK_FACTOR: number = process.env.NODE_ENV === "test" ? 1 : 13;

console.log("House Project Config:".green);
console.log("PORT: ".yellow, API_PORT);
console.log("DATABASE: ".yellow, PGDATABASE);
console.log("BCRYPT_WORK_FACTOR: ".yellow, BCRYPT_WORK_FACTOR);
console.log("---");

export {
  SECRET_KEY,
  PGUSER,
  PGPASSWORD,
  PGHOST,
  PGPORT,
  PGDATABASE,
  API_PORT,
  BCRYPT_WORK_FACTOR
}
