const { screen } = require('@nut-tree/nut-js');
const { fillZero } = require('./util');
const path = require('path');

const informResolution = async () => {
  const height = await screen.height();
  const width = await screen.width();

  console.log(`Sua resolução está em ${width}x${height}.`);
}

const findOpenBoxButton = () => {
  return screen.find('./resources/open-box.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findOKButton = () => {
  return screen.find('./resources/ok.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findExitGameButton = () => {
  return screen.find('./resources/exit-game.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findTurnOffRestartButton = () => {
  return screen.find('./resources/turn-off-restart.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findTurnOffButton = () => {
  return screen.find('./resources/turn-off.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findLoginButton = () => {
  return screen.find('./resources/login.PNG', { confidence: 0.9, searchMultipleScales: true });
}

const findGiftBox = () => {
  return screen.find('./resources/gift-box.PNG', { confidence: 0.8, searchMultipleScales: true });
}

const highLightRegion = async (region) => {
  await screen.highlight(region);
}

const captureScreen = async (prefix = '') => {
  const now = new Date();

  const date = `${fillZero(now.getFullYear())}${fillZero(now.getMonth() + 1)}${fillZero(now.getDate())}`;
  const time = `${fillZero(now.getHours())}${fillZero(now.getMinutes())}${fillZero(now.getSeconds())}`;

  const fileName = `${prefix}${date}-${time}`;

  await screen.capture(fileName, '.png', path.join(__dirname, '..', 'images'));

  console.log(`Captura de tela salva na pasta "images". Nome do arquivo ${fileName}.png.`);
}

module.exports = {
  findOKButton,
  findOpenBoxButton,
  findExitGameButton,
  findTurnOffRestartButton,
  findTurnOffButton,
  findLoginButton,
  findGiftBox,
  highLightRegion,
  informResolution,
  captureScreen
};