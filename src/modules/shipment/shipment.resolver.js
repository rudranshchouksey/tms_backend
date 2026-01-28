import { ShipmentService } from "./shipment.service.js";
import { checkRole } from "../../middleware/role.middleware.js";

export const shipmentResolvers = {

 Query: {
   getShipments: (_, { page = 1, limit = 10, sortBy, order }) => {
      return ShipmentService.getPaginated(page, limit, sortBy, order);
    },

   getShipment: (_, { id }) => {
     return ShipmentService.getById(id);
   }
 },

 Mutation: {
   createShipment: (_, { input }, ctx) => {
     checkRole(ctx, ["ADMIN"]);
     return ShipmentService.create(input);
   },
   updateShipment: (_, { id, input }, ctx) => {
     checkRole(ctx, ["ADMIN"]);
     return ShipmentService.update(id, input);
   },
   deleteShipment: (_, { id }, ctx) => {
     checkRole(ctx, ["ADMIN"]);
     return ShipmentService.delete(id);
   }
 }
};