import express, { Application, Request, Response } from "express";
import cors from "cors";
import routes from "./routes";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application router
app.use("/api/", routes);

app.use(globalErrorHandler);
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    error: {
      name: "NotFoundError",
      path: req.originalUrl,
      method: req.method,
    },
  });
});
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

export default app;
