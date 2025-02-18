const bodyEl = document.getElementById("wrapper");
const imgEl = document.getElementById("img");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
let counter = 0;

nextBtn.addEventListener("click", function () {
  if (counter < 6) {
    counter += 1;
    display(counter);
    console.log(counter);
    if (counter == 1) {
        prevBtn.style.display = "block";
      } else if (counter == 5) {
        nextBtn.style.display = "none";
      }
  }
});

prevBtn.addEventListener("click", function () {
    if (counter > 0) {
      counter -= 1;
      display(counter);
      console.log(counter);
      if (counter == 0) {
          prevBtn.style.display = "none";
        }else if(counter < 5){
            nextBtn.style.display = "block"
        }
    }
  });

function display(counter) {
  imgEl.setAttribute("src", "https://picsum.photos/id/" + counter + "/1200/500");
}

window.addEventListener("load", function () {
  counter = 0;
  display(counter);
});
