import { Router } from "express";
import {
  createCustomer,
  listCustomers,
  listCustomerByID,
} from "../controllers/customer.controller.js";
import { customerValidateSchema } from "../middlewares/customer.middleware.js";

const customerRouter = Router();

customerRouter.post("/customers", customerValidateSchema, createCustomer);
customerRouter.get("/customers", listCustomers);
customerRouter.get("/customers/:id", listCustomerByID);

export default customerRouter;
