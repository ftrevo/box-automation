const { keyboard, Key } = require('@nut-tree/nut-js');

const left = async () => {
  await keyboard.type(Key.A);
}

const right = async () => {
  await keyboard.type(Key.D);
}

const up = async () => {
  await keyboard.type(Key.W);
}

const down = async () => {
  await keyboard.type(Key.S);
}

const options = [
  left, up, right, down
]

const moveRandomly = async () => {
  await options[Math.floor(Math.random() * 4)]();
}

const esc = async () => {
  await keyboard.type(Key.Escape);
}

const windows = async () => {
  await keyboard.type(Key.LeftSuper);
}

module.exports = {
  left,
  right,
  up,
  down,
  moveRandomly,
  esc,
  windows,
}