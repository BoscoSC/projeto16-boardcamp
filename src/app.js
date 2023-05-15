import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import gameRouter from "./routes/game.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(gameRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
