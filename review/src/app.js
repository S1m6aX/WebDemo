const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const bodyEl = document.getElementById("wrapper");
const imgEl = document.getElementById("img");
const nameEl = document.getElementById("name");
const textEl = document.getElementById("text");
const leftBtn = document.getElementById("btn-left");
const rightBtn = document.getElementById("btn-right");

let count = 0;

window.addEventListener("load", function () {
  nameEl.textContent = reviews[count].name;
  textEl.textContent = reviews[count].text;
  imgEl.setAttribute("src", reviews[count].img);
  bodyEl.style.backgroundColor = "#770000";
});

leftBtn.addEventListener("click", function () {
  if (count == 0) {
    count = 3;
  } else {
    count -= 1;
  }
  nameEl.textContent = reviews[count].name;
  textEl.textContent = reviews[count].text;
  imgEl.setAttribute("src", reviews[count].img);
});

rightBtn.addEventListener("click", function () {
  if (count == 3) {
    count = 0;
  } else {
    count += 1;
  }
  nameEl.textContent = reviews[count].name;
  textEl.textContent = reviews[count].text;
  imgEl.setAttribute("src", reviews[count].img);
});
