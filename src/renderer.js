const fs = require('fs');

const dataDir = './src/renderer/data/';
const imgDir = `${dataDir}images/`;
const heroesImgDir = `${imgDir}heroes/`;
const spellsImgDir = `${imgDir}spells/`;

const outputDir = './src/renderer/output/';
const imgOutputDir = `${outputDir}images/`;
const heroesImgOutputDir = `${imgOutputDir}heroes/`;
const spellsImgOutputDir = `${imgOutputDir}spells/`;

import resizeSpell from './renderer/tasks/resizeSpells';
import cropHeroPortrait from './renderer/tasks/cropHeroPortrait';

function runner(message, task, params) {
  console.info(message);
  task(...params);
}

(function resizeSpells() {
  console.info('\n\nResizing spells to 34 x 34\n');

  runner('.. resizing earth spells', resizeSpell, [`${spellsImgDir}earth/`, `${spellsImgOutputDir}34x34/earth/`, 34]);
  runner('.. resizing fire spells', resizeSpell, [`${spellsImgDir}fire/`, `${spellsImgOutputDir}34x34/fire/`, 34]);
  runner('.. resizing light spells', resizeSpell, [`${spellsImgDir}light/`, `${spellsImgOutputDir}34x34/light/`, 34]);
  runner('.. resizing nature spells', resizeSpell, [`${spellsImgDir}nature/`, `${spellsImgOutputDir}34x34/nature/`, 34]);
})();

(function resizeSpells() {
  console.info('\n\nResizing spells to 68 x 68\n');

  runner('.. resizing earth spells', resizeSpell, [`${spellsImgDir}earth/`, `${spellsImgOutputDir}68x68/earth/`, 68]);
  runner('.. resizing fire spells', resizeSpell, [`${spellsImgDir}fire/`, `${spellsImgOutputDir}68x68/fire/`, 68]);
  runner('.. resizing light spells', resizeSpell, [`${spellsImgDir}light/`, `${spellsImgOutputDir}68x68/light/`, 68]);
  runner('.. resizing nature spells', resizeSpell, [`${spellsImgDir}nature/`, `${spellsImgOutputDir}68x68/nature/`, 68]);
})();

(function resizeSpells() {
  console.info('\n\nCropping hero portraits\n');

  runner('.. cropping Zenron', cropHeroPortrait, [`${heroesImgDir}zenron/zenron`, `${heroesImgOutputDir}portrait/zenron.png`]);
  runner('.. cropping Jane', cropHeroPortrait, [`${heroesImgDir}jane/jane`, `${heroesImgOutputDir}portrait/jane.png`]);
  runner('.. cropping Thoben', cropHeroPortrait, [`${heroesImgDir}thoben/thoben`, `${heroesImgOutputDir}portrait/thoben.png`]);
  runner('.. cropping Tierra', cropHeroPortrait, [`${heroesImgDir}tierra/tierra`, `${heroesImgOutputDir}portrait/tierra.png`]);
  runner('.. cropping Myris', cropHeroPortrait, [`${heroesImgDir}myris/myris`, `${heroesImgOutputDir}portrait/myris.png`]);
  runner('.. cropping Van Raven', cropHeroPortrait, [`${heroesImgDir}vanraven/vanraven`, `${heroesImgOutputDir}portrait/vanraven.png`]);
  runner('.. cropping Asgard', cropHeroPortrait, [`${heroesImgDir}asgard/asgard`, `${heroesImgOutputDir}portrait/asgard.png`]);
  runner('.. cropping Ray', cropHeroPortrait, [`${heroesImgDir}ray/ray`, `${heroesImgOutputDir}portrait/ray.png`]);
  runner('.. cropping Lua', cropHeroPortrait, [`${heroesImgDir}lua/lua`, `${heroesImgOutputDir}portrait/lua.png`]);
})();

