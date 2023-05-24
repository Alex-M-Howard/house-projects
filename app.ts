import cors from "cors";
import express from "express";
import { API_PORT } from "./config";
import { router as authRouter } from "./api/routes/auth-route";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  app.use(cors());
}

app.get("/", (req, res) => {
  res.send("Healthy!");
});

app.use(authRouter);


if (process.env.NODE_ENV !== "test") {
  app.listen(API_PORT);
}

export default app;
