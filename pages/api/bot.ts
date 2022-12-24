import { NextApiRequest, NextApiResponse } from "next";
import { Markup, Telegraf } from "telegraf";

const bot = new Telegraf(process.env.NEXT_TELEGRAM_TOKEN as string);

/**
 * hears method is used to listen to a specific text
 * @param {string} text
 * @param {Function} handler
 */
bot.hears("money", async (ctx) => {
  // base on the text, we can send a message reply.
  await ctx.telegram.sendMessage(ctx.message.chat.id, `Money is money bitch`);
  // We can send multiple messages
  // Even some with custo markup
  await ctx.reply(
    "whay",
    Markup.inlineKeyboard([
      Markup.button.callback("Yes", "yes"),
      Markup.button.callback("No", "no"),
    ])
  );
});

bot.action("yes", async (ctx) => {
  await ctx.answerCbQuery("You said No");
});

bot.action("no", async (ctx) => {
  await ctx.answerCbQuery("You said No");
});

// This how you set up expcility commands
bot.command("caption", (ctx) => {
  return ctx.replyWithPhoto(
    { url: "https://picsum.photos/200/300/?random" },
    {
      caption: "Caption",
      parse_mode: "Markdown",
      ...Markup.inlineKeyboard([
        Markup.button.callback("Plain", "plain"),
        Markup.button.callback("Italic", "italic"),
      ]),
    }
  );
});

bot.action(/.+/, (ctx) => {
  return ctx.answerCbQuery(`Oh, ${ctx.match[0]}! Great choice`);
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await bot.handleUpdate(req.body, res);
  console.log(req.body);
};
