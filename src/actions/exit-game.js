const { findExitGameButton } = require('../screen');
const { moveMouse, click } = require('../mouse');
const { esc } = require('../keyboard');
const { waitFor } = require('../util');

const exitGameAction = async () => {
  try {
    const exitGameButton = await findExitGameButton();
    await moveMouse(exitGameButton);
    await click();
  } catch (err) {
    console.log('Erro ao clicar no EXIT GAME, tentando novamente.');
    return exitGameAction();
  }
}

const exitGame = async () => {
  await esc();
  await waitFor(1000);

  await exitGameAction();
}

module.exports = exitGame;