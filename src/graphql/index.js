import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors"; // Added missing import

import { baseTypeDefs } from "./base.schema.js";
import { shipmentTypeDefs } from "../modules/shipment/shipment.schema.js";
import { shipmentResolvers } from "../modules/shipment/shipment.resolver.js";

import { authTypeDefs } from "../modules/auth/auth.schema.js";
import { authResolvers } from "../modules/auth/auth.resolver.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

export const createApolloServer = async () => {
  const app = express();

  // 1. Apply CORS before anything else
  app.use(cors({
    origin: 'https://tms-frontend-nine.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

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
    context: ({ req }) => authMiddleware(req)
  });

  // 2. Start the Apollo Server
  await server.start();

  // 3. Apply the Apollo middleware to the Express app
  server.applyMiddleware({ app, path: '/graphql' });

  // 4. Return the Express APP, not the server
  return app;
};