import { Router } from "express";
import {
  createCustomer,
  listCustomers,
  listCustomerByID,
  updateCustomer,
} from "../controllers/customer.controller.js";
import { customerValidateSchema } from "../middlewares/customer.middleware.js";

const customerRouter = Router();

customerRouter.post("/customers", customerValidateSchema, createCustomer);
customerRouter.get("/customers", listCustomers);
customerRouter.get("/customers/:id", listCustomerByID);
customerRouter.put("/customers/:id", customerValidateSchema, updateCustomer);

export default customerRouter;
