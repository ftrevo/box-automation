const { findGiftBox } = require('../screen');
const { moveMouse, click } = require('../mouse');
const { waitFor } = require('../util');

const giftBoxAction = async () => {
  try {
    const giftBoxRegion = await findGiftBox();
    await moveMouse(giftBoxRegion);
    await click();
  } catch (err) {
    console.log('Erro ao clicar na CAIXA DE PRESENTE, tentando novamente.');
    return giftBoxAction();
  }
}

const giftBox = async () => {
  await waitFor(10000);

  await giftBoxAction();
}

module.exports = giftBox;