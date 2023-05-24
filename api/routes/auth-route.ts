
import express from "express";
import { login } from "../controllers/auth.controller";
import verifyJwt from "../middleware/auth";

export const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    res.status(200).send(await login(req.body));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
