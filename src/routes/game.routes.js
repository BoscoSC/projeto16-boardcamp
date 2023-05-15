import { Router } from "express";
import { createGame } from "../controllers/game.controller.js";
import { gameValidateSchema } from "../middlewares/game.middleware.js";

const gameRouter = Router();

gameRouter.post("/games", gameValidateSchema, createGame);

export default gameRouter;
