import { Router } from "express";
import {
  createCustomer,
  listCustomers,
} from "../controllers/customer.controller.js";
import { customerValidateSchema } from "../middlewares/customer.middleware.js";

const customerRouter = Router();

customerRouter.post("/customers", customerValidateSchema, createCustomer);
customerRouter.get("/customers", listCustomers);

export default customerRouter;
