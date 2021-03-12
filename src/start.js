const { random, esc, } = require('./keyboard');
const { findOpenBoxButton, findOKButton, findExitGameButton, informResolution, captureScreen } = require('./screen');
const { moveMouse, click } = require('./mouse');
const { waitFor, loadConfig } = require('./util');

const config = loadConfig();
let boxesOppened = config.boxesRecovered;

let movementInterval;
let checkBoxInterval;

const exitGame = async () => {
  await esc();
  await waitFor(1000);

  const exitGameButton = await findExitGameButton();
  await moveMouse(exitGameButton);
  await click();

  clearInterval(movementInterval);
  clearInterval(checkBoxInterval);
}

const okBoxAction = async () => {
  const okBoxButtonRegion = await findOKButton();
  await moveMouse(okBoxButtonRegion);
  await click();

  if (config.exitOnOppeningAllBoxes && boxesOppened >= 5) {
    await exitGame();
  }
}

const openBoxAction = async () => {
  let openBoxButtonRegion;

  try {
    openBoxButtonRegion = await findOpenBoxButton();
  } catch (err) {
    return;
  }

  if (openBoxButtonRegion) {
    await moveMouse(openBoxButtonRegion);
    await click();

    boxesOppened = boxesOppened + 1;
    console.log(`Caixa ${boxesOppened} aberta`);

    await waitFor(6000);
    await captureScreen();
    await waitFor(1000);

    await okBoxAction();
  }
}

module.exports = () => {
  informResolution();
  movementInterval = setInterval(random, 10000);
  checkBoxInterval = setInterval(openBoxAction, 20000);
}
