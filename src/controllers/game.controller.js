import { db } from "../configs/database.connection.js";

export async function createGame(req, res) {
  const { name, image, stockTotal, pricePerDay } = res.locals.gameInfo;

  try {
    await db.query(
      `
    INSERT INTO games (name, info, "stockTotal", "pricePerDay")
    VALUES ($1, $2, $3, $4);
    `,
      [name, image, stockTotal, pricePerDay]
    );
  } catch (err) {
    res.status(500).send(err.message);
  }
}
