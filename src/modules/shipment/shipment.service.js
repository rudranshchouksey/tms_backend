import { shipments } from "./shipment.mock.js";

export const ShipmentService = {

 getPaginated: (page, limit, sortBy, order) => {
   const start = (page - 1) * limit;
   const end = start + limit;

   let data = [...shipments];

   if (sortBy) {
     data.sort((a, b) => {
       if (order === "DESC") {
         return a[sortBy] < b[sortBy] ? 1 : -1;
       }
       return a[sortBy] > b[sortBy] ? 1 : -1;
     });
   }

   return {
     data: data.slice(start, end),
     totalCount: shipments.length
   };
 },

 getById: (id) => {
   return shipments.find(s => s.id === id);
 },

 create: (input) => {
   const newShipment = {
     id: Date.now().toString(),
     ...input,
     carrierName: "Demo Carrier",
     status: input.status || "Pending"
   };
   shipments.unshift(newShipment);
   return newShipment;
 },

 update: (id, input) => {
   const index = shipments.findIndex(s => s.id === id);
   if (index === -1) return null;
   shipments[index] = { ...shipments[index], ...input };
   return shipments[index];
 },

 delete: (id) => {
   const index = shipments.findIndex(s => s.id === id);
   if (index === -1) return false;
   shipments.splice(index, 1);
   return true;
 }
};