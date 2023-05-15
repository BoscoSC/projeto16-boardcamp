import { db } from "../configs/database.connection.js";

export async function createCustomer(req, res) {
  const { name, phone, cpf, birthday } = res.locals.customerInfo;

  try {
    await db.query(
      `
    INSERT INTO customers (name, phone, cpf, birthday)
    VALUES ($1, $2, $3, $4);
    `,
      [name, phone, cpf, birthday]
    );

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listCustomers(req, res) {
  try {
    const customerList = await db.query("SELECT * FROM customers");
    res.status(200).send(customerList.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
