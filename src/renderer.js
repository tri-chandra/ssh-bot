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
import renderDeckBackgrounds from './renderer/tasks/renderDeckBackgrounds';
import renderDeckBackground from './renderer/tasks/renderDeckBackground';

function runner(message, task, params) {
  console.info(message);
  task(...params);
}

(function resizeSpells34() {
  console.info('\n\nResizing spells to 34 x 34\n');

  runner('.. resizing earth spells', resizeSpell, [`${spellsImgDir}earth/`, `${spellsImgOutputDir}34x34/earth/`, 34]);
  runner('.. resizing fire spells', resizeSpell, [`${spellsImgDir}fire/`, `${spellsImgOutputDir}34x34/fire/`, 34]);
  runner('.. resizing light spells', resizeSpell, [`${spellsImgDir}light/`, `${spellsImgOutputDir}34x34/light/`, 34]);
  runner('.. resizing nature spells', resizeSpell, [`${spellsImgDir}nature/`, `${spellsImgOutputDir}34x34/nature/`, 34]);
  runner('.. resizing water spells', resizeSpell, [`${spellsImgDir}water/`, `${spellsImgOutputDir}34x34/water/`, 34]);
})();

(function resizeSpells68() {
  console.info('\n\nResizing spells to 68 x 68\n');

  runner('.. resizing earth spells', resizeSpell, [`${spellsImgDir}earth/`, `${spellsImgOutputDir}68x68/earth/`, 68]);
  runner('.. resizing fire spells', resizeSpell, [`${spellsImgDir}fire/`, `${spellsImgOutputDir}68x68/fire/`, 68]);
  runner('.. resizing light spells', resizeSpell, [`${spellsImgDir}light/`, `${spellsImgOutputDir}68x68/light/`, 68]);
  runner('.. resizing nature spells', resizeSpell, [`${spellsImgDir}nature/`, `${spellsImgOutputDir}68x68/nature/`, 68]);
  runner('.. resizing water spells', resizeSpell, [`${spellsImgDir}water/`, `${spellsImgOutputDir}68x68/water/`, 68]);
})();

(function croppingPortraits() {
  console.info('\n\nCropping hero portraits\n');

  runner('.. cropping Zenron', cropHeroPortrait, [`${heroesImgDir}zenron/zenron`, `${heroesImgOutputDir}portrait/zenron.png`]);
  runner('.. cropping Jane', cropHeroPortrait, [`${heroesImgDir}jane/jane`, `${heroesImgOutputDir}portrait/jane.png`]);
  runner('.. cropping Thoben', cropHeroPortrait, [`${heroesImgDir}thoben/thoben`, `${heroesImgOutputDir}portrait/thoben.png`]);
  runner('.. cropping Tierra', cropHeroPortrait, [`${heroesImgDir}tierra/tierra`, `${heroesImgOutputDir}portrait/tierra.png`]);
  runner('.. cropping Myris', cropHeroPortrait, [`${heroesImgDir}myris/myris`, `${heroesImgOutputDir}portrait/myris.png`]);
  runner('.. cropping Ra\'ju', cropHeroPortrait, [`${heroesImgDir}raju/raju`, `${heroesImgOutputDir}portrait/raju.png`]);
  runner('.. cropping Van Raven', cropHeroPortrait, [`${heroesImgDir}vanraven/vanraven`, `${heroesImgOutputDir}portrait/vanraven.png`]);
  runner('.. cropping Asgard', cropHeroPortrait, [`${heroesImgDir}asgard/asgard`, `${heroesImgOutputDir}portrait/asgard.png`]);
  runner('.. cropping Ray', cropHeroPortrait, [`${heroesImgDir}ray/ray`, `${heroesImgOutputDir}portrait/ray.png`]);
  runner('.. cropping Lua', cropHeroPortrait, [`${heroesImgDir}lua/lua`, `${heroesImgOutputDir}portrait/lua.png`]);  
})();

(function renderBg() {
  console.info('\n\nRender deck backgrounds\n');

  runner('.. render background of Zenron', renderDeckBackground, ['Zenron', `${heroesImgDir}zenron/zenron`, `${heroesImgOutputDir}deck-background/zenron.png`])
  runner('.. render background of Jane', renderDeckBackground, ['Jane', `${heroesImgDir}jane/jane`, `${heroesImgOutputDir}deck-background/jane.png`])
  runner('.. render background of Thoben', renderDeckBackground, ['Thoben', `${heroesImgDir}thoben/thoben`, `${heroesImgOutputDir}deck-background/thoben.png`])
  runner('.. render background of Tierra', renderDeckBackground, ['Tierra', `${heroesImgDir}tierra/tierra`, `${heroesImgOutputDir}deck-background/tierra.png`])
  runner('.. render background of Myris', renderDeckBackground, ['Myris', `${heroesImgDir}myris/myris`, `${heroesImgOutputDir}deck-background/myris.png`])
  runner('.. render background of Ra\'ju', renderDeckBackground, ['Raju', `${heroesImgDir}raju/raju`, `${heroesImgOutputDir}deck-background/raju.png`])
  runner('.. render background of Van Raven', renderDeckBackground, ['Van Raven', `${heroesImgDir}vanraven/vanraven`, `${heroesImgOutputDir}deck-background/vanraven.png`])
  runner('.. render background of Asgard', renderDeckBackground, ['Asgard', `${heroesImgDir}asgard/asgard`, `${heroesImgOutputDir}deck-background/asgard.png`])
  runner('.. render background of Ray', renderDeckBackground, ['Ray', `${heroesImgDir}ray/ray`, `${heroesImgOutputDir}deck-background/ray.png`])
  runner('.. render background of Lua', renderDeckBackground, ['Lua', `${heroesImgDir}lua/lua`, `${heroesImgOutputDir}deck-background/lua.png`])
})();

(function renderSkinBg() {
  console.info('\n\nRender deck backgrounds with skins\n');

  const outputDir = `${heroesImgOutputDir}deck-background/`;
  runner('.. render background of Zenron skin', renderDeckBackgrounds, ['Zenron', `${heroesImgDir}zenron/`, outputDir])
  runner('.. render background of Jane skin', renderDeckBackgrounds, ['Jane', `${heroesImgDir}jane/`, outputDir])
  runner('.. render background of Thoben skin', renderDeckBackgrounds, ['Thoben', `${heroesImgDir}thoben/`, outputDir])
  runner('.. render background of Tierra skin', renderDeckBackgrounds, ['Tierra', `${heroesImgDir}tierra/`, outputDir])
  runner('.. render background of Myris skin', renderDeckBackgrounds, ['Myris', `${heroesImgDir}myris/`, outputDir])
  runner('.. render background of Ra\'ju skin', renderDeckBackgrounds, ['Raju', `${heroesImgDir}raju/`, outputDir])
  runner('.. render background of Van Raven skin', renderDeckBackgrounds, ['Van Raven', `${heroesImgDir}vanraven/`, outputDir])
  runner('.. render background of Asgard skin', renderDeckBackgrounds, ['Asgard', `${heroesImgDir}asgard/`, outputDir])
  runner('.. render background of Ray skin', renderDeckBackgrounds, ['Ray', `${heroesImgDir}ray/`, outputDir])
  runner('.. render background of Lua skin', renderDeckBackgrounds, ['Lua', `${heroesImgDir}lua/`, outputDir])
})();