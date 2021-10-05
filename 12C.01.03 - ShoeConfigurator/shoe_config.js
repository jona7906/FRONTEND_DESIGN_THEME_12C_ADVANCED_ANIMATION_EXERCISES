"use strict";

document.addEventListener("DOMContentLoaded", start);

let elementToPaint;

async function start() {
  let response = await fetch("sneaker_02.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  startManipulatingTheSvg();
}

function startManipulatingTheSvg() {
  addInteractionClass();
  document.querySelectorAll(".color_btn").forEach((btn) => btn.addEventListener("click", addFill));
  document.querySelectorAll(".g_to_interact_with").forEach((g) => {
    console.log(g);
    g.addEventListener("click", chooseFill);
  });

  /* g.addEventListener("click", addFill) */

  /*   document.querySelector("g path").remove.fill; */
  /*  document.querySelector("#visor path").classList.add("g_to_interact_with");
  document.querySelector("#crown path").classList.add("g_to_interact_with"); */
}

function addInteractionClass() {
  let allGs = document.querySelectorAll("g");
  allGs.forEach((g) => {
    if (g.id != "shadow_Image-2") {
      g.classList.add("g_to_interact_with");
    }
  });
}

function chooseFill() {
  console.log(this);
  elementToPaint = this;
  this.classList.add("current_g");
  document.querySelector(".current_g").addEventListener("animationend", () => this.classList.remove("current_g"));
  /* if (elementToPaint != "shadow_copy_2_Image") { */
  console.log("choosing fill");
  /*   } */
}

function addFill() {
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
  /*   elementToPaint = this;
  this.style.fill = "grey";
  /* if (elementToPaint != "shadow_copy_2_Image") { */
  console.log("adding fill");
  /*   } */
}
