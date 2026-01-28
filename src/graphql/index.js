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
     authTypeDefs
   ],
   resolvers: [
     shipmentResolvers,
     authResolvers
   ],
   context: ({ req }) => authMiddleware(req)
 });

 // IMPORTANT
 await server.start();

 return server;
};