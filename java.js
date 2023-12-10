"use strict";

const sildes = document.querySelector(".silde-all");
const oneLight = document.querySelector(".one-light ");
const twoLight = document.querySelector(".two-light ");
const threeLight = document.querySelector(".three-light ");
const second = document.querySelector(".second ");
const timebox = document.querySelector(".time ");
let i = 0;
let color = 0;
const time = new Date();

const colorFunc = () => {
  color++;
  if (color === 1) {
    oneLight.style.display = "block";
    threeLight.style.display = "none";
    twoLight.style.display = "none";
    second.style.color = "red";
  } else if (color === 2) {
    threeLight.style.display = "block";
    oneLight.style.display = "none";
    twoLight.style.display = "none";
    second.style.color = "green";
    color = 0;
  }
};

const traffic = () => {
  i++;
  if (i < 31) {
    second.textContent = `${i}`;
  } else {
    i = 0;
  }
  if (i === 25) {
    twoLight.style.display = "block";
    threeLight.style.display = "none";
    oneLight.style.display = "none";
  }
};
colorFunc();

setInterval(() => {}, 1000);
setInterval(traffic, 1000);

setInterval(colorFunc, 30000);
