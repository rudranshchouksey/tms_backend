import jwt from "jsonwebtoken";
import { CONFIG } from "../../config/index.js";

export const AuthService = {

 login: (email) => {

   const role = email.includes("admin") ? "ADMIN" : "EMPLOYEE";

   const token = jwt.sign(
     { email, role },
     CONFIG.auth.jwtSecret,
     { expiresIn: CONFIG.auth.tokenExpiry }
   );

   return { token, role };
 }
};