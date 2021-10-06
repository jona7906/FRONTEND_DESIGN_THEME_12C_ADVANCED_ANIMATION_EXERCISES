"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom

const fallingProperties = {
  duration: 1000,
  iterations: Infinity,
  /*  direction: "alternate",
  easing: "ease-in-out", */
};
const zoomProperties = {
  composite: "add",
  duration: 500,
  iterations: 1,
  fill: "forwards",
  /*  direction: "alternate",
  easing: "ease-in-out", */
};

const fallingKeyframes = [{ transform: "translateY(-20vw)" }, { transform: "translateY(60vw)" }];
const zoomKeyframes = [{ transform: "scale(0)" }, { transform: "scale(2)" }];

/* const ball = document.querySelector("#ball");
const animation = ball.animate(keyframes, properties);
console.log(animation); */

// register click
ball.addEventListener("click", ballClicked);
// start falling animation
const fallingAnimation = ball.animate(fallingKeyframes, fallingProperties);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fallingAnimation.pause();
  // start zoom-animation
  const zoomAnimation = ball.animate(zoomKeyframes, zoomProperties);

  zoomAnimation.onfinish = function () {
    zoomAnimation.cancel();
    fallingAnimation.play();
  };
}
