import { gql } from "apollo-server-express";

export const authTypeDefs = gql`

 type AuthResponse {
   token: String
   role: String
 }

 extend type Mutation {
   login(email: String!, password: String!): AuthResponse
 }
`;