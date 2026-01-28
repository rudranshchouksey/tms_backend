import { gql } from "apollo-server-express";

export const baseTypeDefs = gql`

 scalar Date

 type Query {
   _empty: String
 }

 type Mutation {
   _empty: String
 }

`;