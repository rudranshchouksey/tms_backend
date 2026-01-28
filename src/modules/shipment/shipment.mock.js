import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

export const shipments = Array.from({ length: 150 }).map(() => ({
 id: uuid(),
 shipperName: faker.company.name(),
 carrierName: faker.company.name(),
 pickupLocation: faker.location.city(),
 deliveryLocation: faker.location.city(),
 status: faker.helpers.arrayElement(["In Transit","Delivered","Pending"]),
 rate: faker.number.int({ min: 1000, max: 10000 })
}));