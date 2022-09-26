let countEl = document.getElementById("count-el");
let count = 0;

let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

let store = count + " - "

function save() {
  store = count + " - ";
  saveEl.textContent += store;
  countEl.textContent = 0;
  count = 0;
}

