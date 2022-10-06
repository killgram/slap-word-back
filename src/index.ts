import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 9987;

import { getWorkStatus, getWord } from "./modules";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/status", getWorkStatus);
app.get("/getWord", getWord);

app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
