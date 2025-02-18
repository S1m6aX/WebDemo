const buttonEl = document.getElementById("btn");
const bodyEl = document.getElementById("app");
const textEl = document.getElementById("text");

function generateHex() {
  const HexDigits = "0123456789abcdef".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += HexDigits[Math.floor(Math.random() * 16)];
  }
  return color;
}

function inverseHex(hex) {
  const r = 255 - parseInt(hex.slice(1, 3), 16);
  const g = 255 - parseInt(hex.slice(3, 5), 16);
  const b = 255 - parseInt(hex.slice(5, 7), 16);

  const rgb = [r, g, b];
  let color = "#";
  for (let i = 0; i < 3; i++) {
    color += rgb[i].toString(16);
  }
  return color;
}

function buttonHandler() {
  const textColor = generateHex();
  bodyEl.style.background = textColor;
  textEl.textContent = textColor;
  textEl.style.color = inverseHex(textColor);
}

buttonEl.addEventListener("click", buttonHandler);
window.addEventListener("load", function () {
  bodyEl.style.background = "#770000";
  textEl.textContent = "#770000";
});
