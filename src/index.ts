import express, { Request, Response, Application } from "express";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 9987;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});

app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
