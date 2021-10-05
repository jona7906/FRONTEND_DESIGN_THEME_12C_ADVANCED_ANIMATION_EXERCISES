document.addEventListener("DOMContentLoaded", start);
async function start() {
  let response = await fetch("assets/tiger.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  startManipulatingTheSvg();
}
function startManipulatingTheSvg() {
  document.querySelector("#path304").addEventListener("click", turnRed);
  document.querySelector("#path348").addEventListener("click", turnRed);

  document.querySelector("g").addEventListener("mouseover", turnBlack);
}

function turnRed() {
  document.querySelector("#g302").classList.add("redEyeJedI");
  document.querySelector("#g306").classList.add("redEyeJedI");
  document.querySelector("#g474").classList.add("redEyeJedI");
  document.querySelector("#g350").classList.add("redEyeJedI");
}

function turnBlack() {
  if (this.id != "g4" && this.id != "g302" && this.id != "g306" && this.id != "g475" && this.id != "g350") {
    console.log(this.id);
  }
  /*    if(this. != ) */
}
