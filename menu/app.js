// 菜单数据
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

// 显示菜单项的函数
function displayMenu(menuItems) {
  const sectionCards = document.getElementById("section-cards");
  sectionCards.innerHTML = ""; // 清空之前的卡片
  const rowEl = document.createElement("div");
  rowEl.className = "row g-3"; // Bootstrap row with gutters

  menuItems.forEach((item) => {
    const colEl = document.createElement("div");
    colEl.className = "col-md-6 d-flex justify-content-center"; // 每行两列并居中对齐

    const cardEl = document.createElement("div");
    cardEl.className = "card"; // 卡片元素

    const img = document.createElement("img");
    img.className = "card-img-top";
    img.src = item.img; // 图片地址
    img.alt = item.title; // 图片替代文本

    const cardBody = document.createElement("div");
    cardBody.className = "card-body"; // 卡片主体

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.title; // 卡片标题

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = item.desc; // 卡片描述

    const cardPrice = document.createElement("p");
    cardPrice.className = "card-text";
    cardPrice.textContent = `$${item.price}`; // 卡片价格

    // 将各个部分添加到卡片主体
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    cardEl.appendChild(img);
    cardEl.appendChild(cardBody);
    colEl.appendChild(cardEl);
    rowEl.appendChild(colEl);
  });

  sectionCards.appendChild(rowEl); // 将行添加到卡片显示区域
}

// 过滤菜单项的函数
function sort(type) {
  if (type === "all") {
    displayMenu(menu); // 显示所有菜单项
  } else {
    const filteredMenu = menu.filter((menuItem) => menuItem.category === type); // 过滤菜单项
    displayMenu(filteredMenu); // 显示过滤后的菜单项
  }
}

// 为每个按钮添加点击事件
document.getElementById("btn-all").addEventListener("click", () => sort("all"));
document
  .getElementById("btn-breakfast")
  .addEventListener("click", () => sort("breakfast"));
document
  .getElementById("btn-lunch")
  .addEventListener("click", () => sort("lunch"));
document
  .getElementById("btn-shakes")
  .addEventListener("click", () => sort("shakes"));
document
  .getElementById("btn-dinner")
  .addEventListener("click", () => sort("dinner"));

// 默认显示所有菜单项
window.addEventListener("DOMContentLoaded", () => sort("all"));
