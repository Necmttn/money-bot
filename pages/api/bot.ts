import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.NEXT_TELEGRAM_TOKEN as string);

// bot.hears('text', async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);

//   // Using context shortcut
//   await ctx.reply(`Hello ${ctx.state.role}`);
// });

// bot.on('callback_query', async (ctx) => {
//   // Explicit usage
//   await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

//   // Using context shortcut
//   await ctx.answerCbQuery();
// });

export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;
  bot.hears('text', async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
  });
  console.log(req.body);
  
  res.status(200).send('OK');
};
