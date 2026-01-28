import { ApolloServer } from "apollo-server-express";

import { baseTypeDefs } from "./base.schema.js";

import { shipmentTypeDefs } from "../modules/shipment/shipment.schema.js";
import { shipmentResolvers } from "../modules/shipment/shipment.resolver.js";

import { authTypeDefs } from "../modules/auth/auth.schema.js";
import { authResolvers } from "../modules/auth/auth.resolver.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

export const createApolloServer = async () => {

 const server = new ApolloServer({
   typeDefs: [
     baseTypeDefs,
     shipmentTypeDefs,
     authTypeDefs,
   ],
   resolvers: [
     shipmentResolvers,
     authResolvers
   ],
   introspection: true, 
    playground: true,
   context: ({ req }) => authMiddleware(req)
 });
app.use(cors({
  origin: 'https://your-frontend-url.vercel.app', 
  credentials: true
}));
 // IMPORTANT
 await server.start();

 return server;
};