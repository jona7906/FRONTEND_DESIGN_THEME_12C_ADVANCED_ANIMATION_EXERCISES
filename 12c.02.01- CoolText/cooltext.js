document.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("this is starting, les go");
  let text = getHtmlText();
  deleteHtmlText();
  let textArray = stringToArray(text);

  appendChar(textArray);
  /* setAnimationDelay(); */
}

function appendChar(array) {
  for (let i = 0; i < array.length; i++) {
    let charSpan = document.createElement("span");
    charSpan.append(array[i]);
    charSpan.classList.add("fadeIn");

    charSpan.style.animationDelay = `${i}` * 30 + "ms";

    document.querySelector("h1").appendChild(charSpan);
  }
}

function getHtmlText() {
  let htmlText = document.querySelector("h1").innerText;
  console.log(htmlText);
  return htmlText;
}

function deleteHtmlText() {
  document.querySelector("#cooltext").innerText = "";
  console.log("deleting text");
  console.log(document.querySelector("h1"));
}

function stringToArray(string) {
  let charArray = string.split("");
  console.log(charArray);
  return charArray;
}
