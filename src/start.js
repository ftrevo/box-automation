const { moveRandomly } = require('./keyboard');
const { findOpenBoxButton, informResolution, findLoginButton } = require('./screen');
const { loadConfig } = require('./util');
const exitGameAction = require('./actions/exit-game');
const openBoxAction = require('./actions/open-box');
const okBoxAction = require('./actions/ok-button');
const turnOffAction = require('./actions/turn-off');
const reconnectAction = require('./actions/reconnect');
const giftBoxAction = require('./actions/gift-box');

const config = loadConfig();
let boxesOppened = config.boxesRecovered;

let movementInterval;
let availableBoxCheckInterval;
let disconnectionCheckInterval;

const setIntervals = () => {
  movementInterval = setInterval(moveRandomly, config.movementInterval);
  availableBoxCheckInterval = setInterval(checkBoxAvailable, config.boxVerificationInterval);
  disconnectionCheckInterval = setInterval(checkDisconnection, config.disconnectionVerificationInterval);
  console.log('Intervalos de execução definidos.');
}

const clearIntervals = () => {
  clearInterval(movementInterval);
  clearInterval(availableBoxCheckInterval);
  clearInterval(disconnectionCheckInterval);
  console.log('Intervalos de execução removidos.');
}

const checkBoxAvailable = async () => {
  let openBoxButtonRegion;

  try {
    openBoxButtonRegion = await findOpenBoxButton();
  } catch (err) {
    return;
  }

  boxesOppened = boxesOppened + 1;
  await openBoxAction(openBoxButtonRegion, boxesOppened);
  await okBoxAction();

  if (config.exitOnOppeningAllBoxes && boxesOppened >= 5) {
    clearIntervals();

    await exitGameAction();

    if (config.turnOffComputer) {
      await turnOffAction();
    }

    console.log('Script finalizado.');
  }
}

const checkDisconnection = async () => {
  let logInRegion;

  try {
    logInRegion = await findLoginButton();
  } catch (err) {
    return;
  }

  console.log('Desconexão detetcada, reconectando.');
  clearIntervals();
  await reconnectAction(logInRegion);
  await giftBoxAction();
  setIntervals();
}

module.exports = () => {
  informResolution();
  setIntervals();
  console.log('Script iniciado.');
}
