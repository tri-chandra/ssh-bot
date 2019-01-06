import Discord from 'discord.js';
import Jimp from 'jimp';
import Spells from '../data/spells';
import C from '../models/Constants';

const upgradeMultiplier = 1.2;
const levelCap = 15;

function unlockToString(objs, discord) {
  let retval = '';
  objs.forEach((item) => {
    retval += `  ${discord.client.emojis.find(em => em.name === item.hero.toLocaleLowerCase())}:${item.level}:`;
  });

  return retval;
}

function scaleToLevel(n, level) {
  let total = n;
  for (let i = 1; i < level && i < levelCap; i = i + 1) {
    total *= upgradeMultiplier;
  }

  return Math.round(total).toLocaleString('en-US', { useGrouping: true });;
}

function scaleDescription(text, level, spell) {
  let result = text.split('%lvl%').join(level);
  result = result.split('%dmg%').join(scaleToLevel(spell.fixedDamage, level));

  return result;
}

function getUpgradeCostStep1(tier, level) {
  let n = (level > 15 ? 15 : level);
  return Spells.upgradeCost[tier][n].toLocaleString('en-US', { useGrouping: true });
}

function getUpgradeCostStepN(tier, level) {
  let sum = 0;
  for (let i = 2; i <= level && i <= levelCap; i = i + 1) {
    sum += Spells.upgradeCost[tier][i];
  }

  return sum.toLocaleString('en-US', { useGrouping: true });
}

function tokensToDescriptions(tokens, level) {
  const descriptions = tokens.map((token) => {
    let description = `${token.name}: ${token.description};`;
    description = scaleDescription(description, level, token);
    return description;
  });

  return descriptions.join(' ');
}

export default {
  async getSpellStats(discord, command, level) {
    const spells = Object.keys(Spells).filter(
        key => key.toLocaleLowerCase().includes(`:${command}`)
      ).map(
        key => Spells[key]
      );
    const [spell] = spells;

    if (!spell) {
      discord.reply('the spell is unknown. Type `!help spell` for more information.');
      return;
    }

    let fields = [];
    spell.tier && fields.push({ name: 'Tier', value: spell.tier, inline: true });
    spell.element && fields.push({ name: 'Element', value: spell.element.display, inline: true });
    spell.damage && fields.push({ name: ':boom: Damage:', value: scaleToLevel(spell.damage, level), inline: true });
    spell.heal && fields.push({ name: ':green_heart: Heal:', value: spell.heal, inline: true });
    spell.resistance && fields.push({ name: ':diamond_shape_with_a_dot_inside: Resistance:', value: scaleToLevel(spell.resistance, level), inline: true });
    spell.breakPower && fields.push({ name: ':diamond_shape_with_a_dot_inside: Break Power:', value: scaleToLevel(spell.breakPower, level), inline: true });
    spell.shield && fields.push({ name: ':shield: Shield:', value: scaleToLevel(spell.shield, level), inline: true });
    spell.count && fields.push({ name: ':slot_machine: Count', value: spell.count, inline: true });
    spell.speed && fields.push({ name: ':zap: Speed', value: spell.speed, inline: true });    
    spell.target === C.AllPlayers && fields.push({ name: 'Target', value: 'All Players', inline: true });
    spell.target === C.RandomPlayers && fields.push({ name: 'Target', value: 'Random Player', inline: true });

    spell.type === C.OvertimeSpell && fields.push({ name: 'Type', value: ':arrows_counterclockwise: Over Time' });
    spell.onCast && fields.push({ name: 'On Cast', value: scaleDescription(spell.onCast, level, spell) });
    spell.onHit && fields.push({ name: 'On Hit', value: scaleDescription(spell.onHit, level, spell) });
    spell.onBlock && fields.push({ name: 'On Block', value: scaleDescription(spell.onBlock, level, spell) });
    spell.onBreak && fields.push({ name: 'On Break', value: scaleDescription(spell.onBreak, level, spell) });
    spell.overTime && fields.push({ name: 'Over Time', value: scaleDescription(spell.overTime, level, spell) });
    spell.onTimeout && fields.push({ name: 'On timeout', value: scaleDescription(spell.onTimeout, level, spell) });

    spell.unlockedAt && fields.push({ name: 'Unlockables', value: unlockToString(spell.unlockedAt, discord) });

    if (level > 1) {
      fields.push({ name: `Gold cost to level ${level}`, value: getUpgradeCostStep1(spell.tier, level), inline: true });
      fields.push({ name: `Total Gold cost to level ${level}`, value: getUpgradeCostStepN(spell.tier, level), inline: true });
    }

    const imgIcon = await Jimp.read(`./src/renderer/output/images/spells/34x34/${spell.sprite}`);
    const bufferIcon = await imgIcon.getBufferAsync(Jimp.MIME_JPEG);
    const imgThumb = await Jimp.read(`./src/renderer/output/images/spells/68x68/${spell.sprite}`);
    const bufferThumb = await imgThumb.getBufferAsync(Jimp.MIME_JPEG);

    const embededObj = new Discord.RichEmbed({
      thumbnail: { url: 'attachment://thumb.jpg' },
      author: { name: spell.name, icon_url: 'attachment://icon.jpg' },
      fields,
      footer: spell.tokens ? {
        text: tokensToDescriptions(spell.tokens)
      } : undefined,
    });
    embededObj.attachFiles([
      { attachment: bufferIcon, name: 'icon.jpg' }, 
      { attachment: bufferThumb, name: 'thumb.jpg' }
    ]);

    discord.channel.send(embededObj);
  }
}
