const Discord = require('discord.js');
const client = new Discord.Client();
const { discordToken, prefix, owner } = require('./config/vars');
import router from './api/routes/v1';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  const content = msg.content.toLowerCase();
  const userId = msg.author.id;
  const tokens = content.toLocaleLowerCase().substring(1).split(/[\s]+/);

  if (content.charAt(0) !== prefix) return;
  // if (userId !== owner) {
  //   msg.reply('Sorry, only the owner can play with the bot :innocent:');

  //   return;
  // }

  router.route(msg, tokens);

  // if (msg.content === 'ping') {
  //   msg.reply('pong');
  // }
});

client.login(discordToken);
