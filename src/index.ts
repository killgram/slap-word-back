import express, { Application } from "express";
import cors from "cors";

import { getWorkStatus } from "./modules";

const app: Application = express();
const PORT = process.env.PORT || 9987;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/status", getWorkStatus);

app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
