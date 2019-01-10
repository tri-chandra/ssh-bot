const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  discordToken: process.env.DISCORD_TOKEN,
  prefix: process.env.PREFIX,
  owner: process.env.OWNER,
  redis: process.env.REDIS,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};
