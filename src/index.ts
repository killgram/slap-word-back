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
  support,
  getAboutApp,
} from "./modules";

import {
  authenticateJWT,
  verificationAuthGet,
  verificationAuthPost,
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
app.get("/support", authenticateJWT, support);
app.get("/getAboutApp", authenticateJWT, getAboutApp);
// GET ROOT
app.get("/getRootXKey", root.getRootXKey);
app.get("/getWrongWord", root.getWrongWord);
app.get("/getCurrentWrongWord", root.getCurrentWrongWord);

// POST
app.post("/signUp", verificationAuthPost, signUp);
app.post("/updateScore", authenticateJWT, verificationAuthPost, updateScore);
app.post("/wrongWord", authenticateJWT, wrongWord);

// listener
app.listen(PORT, (): void => {
  console.log(`Server running on port here 👉 ${PORT}`);
});
