import { customerSchema } from "../schemas/customer.schema.js";
import { db } from "../configs/database.connection.js";

export async function customerValidateSchema(req, res, next) {
  const customerInfo = req.body;
  const { id } = req.params;

  const validate = customerSchema.validate(customerInfo);

  if (validate.error) {
    res.sendStatus(400);
    return;
  }

  const exist = await db.query("SELECT * FROM customers WHERE cpf=$1", [
    customerInfo.cpf,
  ]);

  if (exist.rows.length > 0 && exist.rows[0].id !== Number(id)) {
    res.sendStatus(409);
    return;
  }

  if (id) {
    res.locals.customerInfo = { ...customerInfo, id };
  } else {
    res.locals.customerInfo = customerInfo;
  }

  next();
}
