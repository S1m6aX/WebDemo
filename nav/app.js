// const input = document.getElementById("input");
const btn = document.getElementById("search");

btn.addEventListener("click", function () {
  const input = document.getElementById("input");
  const value = input.value.toLowerCase();
  console.log(value);
  if (value == "color flipper") {
    window.open("/01_color_flipper/color_flipper.html", "self");
  } else if (value == "counter") {
    window.open("/counter/counter.html", "self");
  } else if (value == "review") {
    window.open("/review/src/index.html", "self");
  } else {
    window.alert("Please enter an valid input");
  }
});
