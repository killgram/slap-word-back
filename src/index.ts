import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 9987;

import {
  getWorkStatus,
  getWord,
  signUp,
  signIn,
  updateScore,
  checkWord,
  getTopScoreUsers,
  getWordOfTheDay,
  wrongWord,
  root,
} from "./modules";

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/status", getWorkStatus);
app.get("/getWord", getWord);
app.get("/signIn", signIn);
app.get("/checkWord", checkWord);
app.get("/getTopScore", getTopScoreUsers);
app.get("/getWordOfTheDay", getWordOfTheDay);
// GET ROOT
app.get("/getRootXKey", root.getRootXKey);
app.get("/getWrongWord", root.getWrongWord);

// POST
app.post("/signUp", signUp);
app.post("/updateScore", updateScore);
app.post("/wrongWord", wrongWord);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
