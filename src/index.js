const Discord = require('discord.js');

const discordClient = new Discord.Client();
const { discordToken, prefix, owner } = require('./config/vars');
import router from './api/routes/v1';

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient.user.tag}!`);
});

discordClient.on('message', msg => {
  try {
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
  } catch (e) {
    console.log(e);
  }
});

discordClient.on('error', console.log);

discordClient.login(discordToken);

const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', () => {
  console.log('Connected to Redis.');
})

redisClient.on('error', console.log);