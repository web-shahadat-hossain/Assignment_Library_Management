import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application router
app.use("/api/", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

export default app;
