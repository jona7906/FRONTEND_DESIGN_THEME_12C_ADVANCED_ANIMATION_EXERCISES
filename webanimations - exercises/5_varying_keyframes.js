"use strict";

const bounce = {
  composite: "add",
  duration: 2580,
  iterations: Infinity,
};

const bounce_kf = [
  { offset: 0, transform: "translate(0, 3.5vw)", easing: "ease-in" },
  { offset: 0.35, transform: "translate(0, 31vw)", easing: "ease-out" },
  { offset: 0.51, transform: "translate(0, 13vw)", easing: "ease-in" },
  { offset: 0.65, transform: "translate(0, 31vw)", easing: "ease-out" },
  { offset: 0.75, transform: "translate(0, 20vw)", easing: "ease-in" },
  { offset: 0.86, transform: "translate(0, 31vw)", easing: "ease-out" },
  { offset: 0.92, transform: "translate(0, 26vw)", easing: "ease-in" },
  { offset: 1, transform: "translate(0, 31vw)", easing: "ease-out" },
];

const moveright = {
  composite: "add",
  duration: 2580,
  iterations: Infinity,
  easing: "linear",
};

const moveright_kf = [
  { offset: 0, transform: "translate(0vw, 0)" },
  { offset: 0.35, transform: "translate(14vw, 0)" },
  { offset: 0.51, transform: "translate(22vw, 0)" },
  { offset: 0.65, transform: "translate(29vw, 0)" },
  { offset: 0.75, transform: "translate(34vw, 0)" },
  { offset: 0.86, transform: "translate(39vw, 0)" },
  { offset: 0.92, transform: "translate(43vw, 0)" },
  { offset: 1, transform: "translate(46vw, 0)" },
];

const ball = document.querySelector("#ball");
const animation = ball.animate(bounce_kf, bounce);
animation = ball.animate(moveright_kf, moveright);
