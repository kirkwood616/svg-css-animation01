const logo = document.querySelectorAll("#logo path");
const border = document.querySelector("#border path");

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

console.log(`Border is ${border.getTotalLength()}`);

function locationreload() {
  location.reload();
}
