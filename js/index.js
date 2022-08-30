const canvas = document.getElementsById('canvas');
const context = canvas.getContext('2d');

document.oncontextmenu = () => {
  return false;
};

const drawings = [];

let cursorX;
let cursorY;
let prevCursorX;
let prevCursorY;

let offsetX = 0;
let offsetY = 0;

let scale = 1;

const toScreenX = xTrue => {
  return (xTrue + offsetX) * scale;
};
const toScreenY = yTrue => {
  return (yTrue + offsetY) * scale;
};
const toTrueX = xScreen => {
  return xScreen / scale - offsetX;
};
const toTrueY = yScreen => {
  return yScreen / scale - offsetY;
};

const trueHeight = () => {
  return canvas.clientHeight / scale;
};
const trueWidth = () => {
  return canvas.clientWidth / scale;
};
