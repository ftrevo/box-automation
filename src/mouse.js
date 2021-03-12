const { mouse, straightTo, centerOf } = require('@nut-tree/nut-js');

const moveMouse = async (region) => {
  await mouse.move(straightTo(centerOf(region)));
}

const click = async () => {
  await mouse.leftClick();
}

module.exports = { moveMouse, click };