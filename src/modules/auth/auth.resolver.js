import { AuthService } from "./auth.service.js";

export const authResolvers = {

 Mutation: {
   login: (_, { email }) => {
     return AuthService.login(email);
   }
 }
};