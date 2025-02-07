import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalErrorHandler from "./app/middlewares/globalErrorHandlers";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://mupicomputerclub.vercel.app"],
    credentials: true,
  }),
);

app.use(cookieParser());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers 👋!!!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
