import express, { Express, Request, Response, NextFunction } from "express";
import sightingsRouter from "./routes/sightings";
import parksRouter from "./routes/parks";
import floraRouter from "./routes/flora_sightings";

import errorHandlingMiddleware from "./middlewares/errorHandling";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/sightings", sightingsRouter);
app.use("/api/parks", parksRouter);
app.use("/api/flora", floraRouter);
app.use(errorHandlingMiddleware);

export default app;
