import { gql } from "apollo-server-express";

export const shipmentTypeDefs = gql`
 type Shipment {
   id: ID!
   shipperName: String
   carrierName: String
   pickupLocation: String
   deliveryLocation: String
   status: String
   rate: Float
 }

 input ShipmentInput {
   shipperName: String!
   pickupLocation: String!
   deliveryLocation: String!
   rate: Float!
   status: String
 }

 type ShipmentPage {
   data: [Shipment]
   totalCount: Int
 }

 extend type Query {
  getShipments(page: Int, limit: Int, sortBy: String, order: String): ShipmentPage
  getShipment(id: ID!): Shipment
}

 extend type Mutation {
   createShipment(input: ShipmentInput!): Shipment
   updateShipment(id: ID!, input: ShipmentInput!): Shipment
   deleteShipment(id: ID!): Boolean
 }
`;