import { gameSchema } from "../schemas/game.schema.js";
import { db } from "../configs/database.connection.js";

export async function gameValidateSchema(req, res, next) {
  const gameInfo = req.body;

  const validate = gameSchema.validate(gameInfo);

  if (validate.error) {
    res.sendStatus(400);
    return;
  }

  const exist = await db.query("SELECT * FROM games WHERE name=$1", [
    gameInfo.name,
  ]);

  if (exist.rows.length > 0) {
    res.sendStatus(409);
    return;
  }

  res.locals.gameInfo = gameInfo;
  next();
}
