const TelegramBot = require("node-telegram-bot-api");

const token = "5828945434:AAGpY_MaAp87CAGBP4I30JQdrybbO4tEBo0";
//const webAppUrl = "https://ajar-fanatical-father.glitch.me/";
//const webAppUrl = "https://bejewelled-genie-8084c7.netlify.app/";
const webAppUrl = "https://widget.cdek.ru/examples/example2-5.min.html";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(chatId, "Какой-то текст", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Открыть магазин", web_app: { url: webAppUrl } }],
        ],
      },
    });
  }

  //bot.sendMessage(chatId, "Received your message");
});
