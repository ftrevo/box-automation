const { findOKButton } = require('../screen');
const { moveMouse, click } = require('../mouse');

const okBoxAction = async () => {
  try {
    const okBoxButtonRegion = await findOKButton();
    await moveMouse(okBoxButtonRegion);
    await click();
  } catch (err) {
    console.log('Erro ao clicar no OK, tentando novamente.');
    return okBoxAction();
  }
}

module.exports = okBoxAction;