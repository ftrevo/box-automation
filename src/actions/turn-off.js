const { findTurnOffButton, findTurnOffRestartButton, captureScreen } = require('../screen');
const { moveMouse, click } = require('../mouse');
const { windows } = require('../keyboard');
const { waitFor } = require('../util');

const turnOffRestartAction = async () => {
  try {
    const turnOffShutdownRegion = await findTurnOffRestartButton();
    await moveMouse(turnOffShutdownRegion);
    await click();
    await waitFor(1000);
  } catch (err) {
    console.log('Erro ao clicar no DESLIGAR/REINICIAR, tentando novamente.');
    return turnOffRestartAction();
  }
}

const turnOffAction = async () => {
  try {
    const turnOffRegion = await findTurnOffButton();
    await moveMouse(turnOffRegion);
    await click();
    await click(); // Double click due to focus reason
  } catch (err) {
    console.log('Erro ao clicar no DESLIGAR, tentando novamente.');
    return turnOffAction();
  }
}

const turnOff = async () => {
  await waitFor(2000);
  await captureScreen('TURNOFF-');

  await windows();
  await waitFor(1000);

  await turnOffRestartAction();
  await turnOffAction();
}

module.exports = turnOff;