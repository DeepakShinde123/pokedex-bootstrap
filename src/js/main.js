import data from "./data.json";

for (let i of data) {
  console.log(i.name);
}

const datarow = document.querySelector("[data-row]");
console.log(datarow);

for (let pokemon of data) {
  const p = document.createElement("p");
  p.textContent = pokemon.name;
  datarow.appendChild(p);
}
