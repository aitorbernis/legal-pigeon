import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import propiedadRoute from "./routes/propertyRoutes";
import { errorHandler } from "./middleware/errors";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use("/api/properties", propiedadRoute);
app.use(errorHandler);

export default app;
