const { random, esc, } = require('./keyboard');
const { findOpenBoxButton, findOKButton, findExitGameButton, informResolution, captureScreen } = require('./screen');
const { moveMouse, click } = require('./mouse');
const { waitFor, loadConfig } = require('./util');

const config = loadConfig();
let boxesOppened = config.boxesRecovered;

let movementIntervalAction;
let checkBoxIntervalAction;

const exitGameAction = async () => {
  try {
    const exitGameButton = await findExitGameButton();
    await moveMouse(exitGameButton);
    await click();

    clearInterval(movementIntervalAction);
    clearInterval(checkBoxIntervalAction);

    console.log('Script finalizado');
  } catch (err) {
    console.log('Erro ao clicar no EXIT GAME, tentando noamente');
    return exitGameAction();
  }
}

const exitGame = async () => {
  await esc();
  await waitFor(1000);

  await exitGameAction();
}

const okBoxAction = async () => {
  try {
    const okBoxButtonRegion = await findOKButton();
    await moveMouse(okBoxButtonRegion);
    await click();
  } catch (err) {
    console.log('Erro ao clicar no OK, tentando noamente');
    return okBoxAction();
  }

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
  movementIntervalAction = setInterval(random, config.movementInterval);
  checkBoxIntervalAction = setInterval(openBoxAction, config.boxVerificationInterval);
  console.log('Script iniciado');
}
