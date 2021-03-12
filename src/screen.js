const { screen } = require('@nut-tree/nut-js');
const path = require('path');

const informResolution = async () => {
  const height = await screen.height();
  const width = await screen.width();

  console.log(`\nSua resolução está em ${width}x${height}\n`);
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

const highLightRegion = async (region) => {
  await screen.highlight(region);
}

const fillZero = (number) => {
  return (number + '').padStart(2, '0');
}

const captureScreen = async () => {
  const now = new Date();

  const date = `${fillZero(now.getFullYear())}${fillZero(now.getMonth() + 1)}${fillZero(now.getDate())}`;
  const time = `${fillZero(now.getHours())}${fillZero(now.getMinutes())}${fillZero(now.getSeconds())}`;

  const fileName = `${date}-${time}`;

  await screen.capture(fileName, '.png', path.join(__dirname, '..', 'images'));

  console.log(`Captura de tela salva na pasta "images". Nome do arquivo ${fileName}.png`);
}

module.exports = { findOKButton, findOpenBoxButton, findExitGameButton, highLightRegion, informResolution, captureScreen };