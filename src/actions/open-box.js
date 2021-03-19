const { captureScreen } = require('../screen');
const { moveMouse, click } = require('../mouse');
const { waitFor } = require('../util');

const openBoxAction = async (openBoxButtonRegion, boxesOppened) => {
  await moveMouse(openBoxButtonRegion);
  await click();
  console.log(`Caixa ${boxesOppened} aberta.`);
  await waitFor(6000);
  await captureScreen();
}

module.exports = openBoxAction;