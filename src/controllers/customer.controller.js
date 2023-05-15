import dayjs from "dayjs";
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

    const customerListFixed = customerList.rows.map((item) => {
      const newItem = {
        ...item,
        birthday: dayjs(item.birthday).format("YYYY-MM-DD"),
      };

      return newItem;
    });

    res.status(200).send(customerListFixed);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function listCustomerByID(req, res) {
  const { id } = req.params;

  try {
    const customer = await db.query("SELECT * FROM customers WHERE id=$1", [
      id,
    ]);

    if (customer.rowCount === 0) {
      res.sendStatus(404);
      return;
    }

    const customerFixed = customer.rows.map((item) => {
      const newItem = {
        ...item,
        birthday: dayjs(item.birthday).format("YYYY-MM-DD"),
      };

      return newItem;
    });

    res.status(200).send(customerFixed[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function updateCustomer(req, res) {
  const { name, phone, cpf, birthday, id } = res.locals.customerInfo;

  try {
    await db.query(
      `
    UPDATE customers SET name=$1, phone=$2, cpf=$3, birthday=$4
    WHERE id=$5;
    `,
      [name, phone, cpf, birthday, id]
    );

    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
