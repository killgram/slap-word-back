import axios from "axios";
import { DiscordConfig, DiscordWebhooks } from "../../configurations";
import { getCurrentDate } from "../../utils";

const sendGetHistory = async () => {
  const { username, content, color } = DiscordWebhooks.GetHistory;
  const params = {
    username: username,
    content: content,
    color: color,
    embeds: [
      {
        fields: [
          {
            name: "Timestamp",
            value: getCurrentDate(),
          },
        ],
      },
    ],
  };
  await axios.post(DiscordConfig.get_history, params);
};

export { sendGetHistory };
