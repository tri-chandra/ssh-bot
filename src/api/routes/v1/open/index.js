const routes = {
  
};

function route(discord, tokens) {
  if (!tokens) return;

  const [command, ...rest] = tokens;

  if (routes[command]) {
    discord.channel.send(`Here are ${command} spells!`);
  }
}

export default {
  route
}