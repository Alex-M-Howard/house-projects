import { Client } from "pg";
import dotenv from "dotenv";
import { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } from "./config";

const db = new Client({
  connectionString: `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`
});
    
db.connect();

export default db;
