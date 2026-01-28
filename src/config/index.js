import { rawEnv } from "./env.js";

export const CONFIG = {

 server: {
   port: rawEnv.PORT || 4000,
   env: rawEnv.NODE_ENV || "development"
 },

 auth: {
   jwtSecret: rawEnv.JWT_SECRET,
   tokenExpiry: "1d"
 },

 pagination: {
   defaultLimit: 10,
   maxLimit: 50
 },

 performance: {
   enableCaching: false
 }
};