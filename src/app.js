import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import gameRouter from "./routes/game.routes.js";
import customerRouter from "./routes/customers.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(gameRouter);
app.use(customerRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port: ${port}`));
