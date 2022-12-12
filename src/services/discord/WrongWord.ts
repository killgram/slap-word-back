import axios from "axios";
import { DiscordConfig, DiscordWebhooks } from "../../configurations";
import { getCurrentDate } from "../../utils";

const sendWrongWord = async (word: string) => {
  const { username, content, color } = DiscordWebhooks.WrongWord;
  const params = {
    username: username,
    embeds: [
      {
        title: content,
        color: color,
        fields: [
          {
            name: "Word",
            value: word,
          },
          {
            name: "Timestamp",
            value: getCurrentDate(),
          },
        ],
      },
    ],
  };
  await axios.post(DiscordConfig.wrong_word, params);
};

export { sendWrongWord };
