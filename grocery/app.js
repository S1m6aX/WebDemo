const submit_btn = document.getElementById("submit");
const listEl = document.getElementById("grocery-list");
submit_btn.addEventListener("click", function () {
  const textEl = document.getElementById("grocery").value;
  const itemEl = document.createElement("li");
  itemEl.textContent = textEl;
  listEl.append(itemEl);
  const edit_btn = document.createElement("button");
  const remove_btn = document.createElement("button");
});
