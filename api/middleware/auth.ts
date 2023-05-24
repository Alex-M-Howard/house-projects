import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const verifyJwt = (req: any, res: any, next: any) => {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    const token = tokenHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err: any, decoded: any) => {
      if (!err) next();
    });
  }
  
  return res.status(401).json({ message: "Not authorized" });
};

export default verifyJwt;