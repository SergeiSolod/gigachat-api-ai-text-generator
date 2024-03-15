const dotenv = require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

class controller {
  async getText(req, res) {
    try {
      const { text } = req.body;

      const headers = {
        Authorization: `Basic ${dotenv.parsed.AUTH}`,
        RqUID: uuidv4(),
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      };

      const access_token = await axios
        .post(
          "https://ngw.devices.sberbank.ru:9443/api/v2/oauth",
          encodeURI(`scope=${dotenv.parsed.SCOPE}`),
          {
            headers: headers,
          },
        )
        .then((response) => {
          return response.data.access_token;
        })
        .catch((error) => {
          return error;
        });

      const textAI = await axios
        .post(
          "https://gigachat.devices.sberbank.ru/api/v1/chat/completions",
          JSON.stringify({
            model: "GigaChat:latest",
            messages: [
              {
                role: "user",
                content: text,
              },
            ],
            profanity_check: true,
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`,
            },
          },
        )
        .then((response) => {
          return response.data.choices[0].message.content;
        })
        .catch((error) => {
          return error;
        });

      res.status(200).json({ text: textAI });
    } catch (e) {
      res.status(400).json({ message: "Server error, please try again" });
    }
  }
}

module.exports = new controller();
