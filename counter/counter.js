const bodyEl = document.getElementById("app");
const dec_btnEl = document.getElementById("btn-dec");
const res_btnEl = document.getElementById("btn-res");
const inc_btnEl = document.getElementById("btn-inc");

let counterEl = document.getElementById("section-counter");

function decHandler() {
  counterEl.textContent = parseInt(counterEl.textContent) - 1;
  if (counterEl.textContent < 0) {
    counterEl.style.color = "#ff0000";
  }
  if (counterEl.textContent == 0) {
    counterEl.style.color = "#000000";
  }
}

function resHandler() {
  counterEl.textContent = 0;
  counterEl.style.color = "#000000";
}

function incHandler() {
  counterEl.textContent = parseInt(counterEl.textContent) + 1;
  if (counterEl.textContent > 0) {
    counterEl.style.color = "#0000ff";
  }
  if (counterEl.textContent == 0) {
    counterEl.style.color = "#000000";
  }
}

window.addEventListener("load", function () {
  counterEl.textContent = 0;
  bodyEl.style.background = "#770000";
});

dec_btnEl.addEventListener("click", decHandler);
res_btnEl.addEventListener("click", resHandler);
inc_btnEl.addEventListener("click", incHandler);
