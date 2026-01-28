import jwt from "jsonwebtoken";
import { CONFIG } from "../config/index.js";

export const authMiddleware = (req) => {

 const token = req.headers.authorization || "";

 if (!token) return { user: null };

 try {
   const decoded = jwt.verify(
     token.replace("Bearer ", ""),
     CONFIG.auth.jwtSecret
   );

   return { user: decoded };

 } catch {
   return { user: null };
 }
};