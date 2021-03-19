const { moveMouse, click } = require('../mouse');

const reconnect = async (logInRegion) => {
  await moveMouse(logInRegion);
  await click();
}

module.exports = reconnect;