import { Router } from "express";
import { createGame, listGames } from "../controllers/game.controller.js";
import { gameValidateSchema } from "../middlewares/game.middleware.js";

const gameRouter = Router();

gameRouter.post("/games", gameValidateSchema, createGame);
gameRouter.get("/games", listGames);

export default gameRouter;
