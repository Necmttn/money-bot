export default async (req, res) => {
  const tgbot = process.env.NEXT_TELEGRAM_TOKEN;
  console.log(req.body);
  
  res.status(200).send('OK');
};
