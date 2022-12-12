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
  getAboutApp,
  getHistory,
} from "./modules";

import {
  authenticateJWT,
  verificationAuthGet,
  verificationAuthPost,
  historyAuthenticate,
} from "./middleware";

// configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get("/status", getWorkStatus);
app.get("/getWord", authenticateJWT, getWord);
app.get("/signIn", verificationAuthGet, signIn);
app.get("/checkWord", authenticateJWT, checkWord);
app.get("/getTopScore", authenticateJWT, getTopScoreUsers);
app.get("/getWordOfTheDay", authenticateJWT, getWordOfTheDay);
app.get("/getAboutApp", authenticateJWT, getAboutApp);
app.get("/history", historyAuthenticate, getHistory);

// POST
app.post("/signUp", verificationAuthPost, signUp);
app.post("/updateScore", authenticateJWT, verificationAuthPost, updateScore);
app.post("/wrongWord", authenticateJWT, wrongWord);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
