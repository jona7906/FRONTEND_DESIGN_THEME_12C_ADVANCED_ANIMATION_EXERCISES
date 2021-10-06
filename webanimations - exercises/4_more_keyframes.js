"use strict";

const keyframes = [{ transform: "translate(42vw, 0vw)" }, { transform: "translate(85vw, 20vw)" }, { transform: "translate(42vw, 41vw)" }, { transform: "translate(0vw, 20vw)" }, { transform: "translate(42vw, 0vw)" }];
const properties = {
  duration: 5000,
  iterations: Infinity,

  easing: "ease",
};

const ball = document.querySelector("#ball");
const animation = ball.animate(keyframes, properties);
