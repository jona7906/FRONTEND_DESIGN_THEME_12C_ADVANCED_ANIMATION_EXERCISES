window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
  console.log("load the SVG");

  fetch("car_and_road.svg")
    .then((response) => response.text())
    .then((svgData) => {
      console.log("SVG loaded");
      document.querySelector("#thesvg").innerHTML = svgData;
      // TODO: put the SVG into the DOM

      // TODO: Start the animation
      runAnimation();
    });
}

let car = null;
let curve = null;
let currentPosition;

function runAnimation() {
  console.log("animate");
  document.querySelector("#car").classList.add("followCurve");
  // TODO: Build animation ...
}
