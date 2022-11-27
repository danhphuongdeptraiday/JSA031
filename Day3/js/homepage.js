let box = document.getElementById("box");

document.getElementById("showmore").addEventListener("click", function () {
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
});

let s = "Get food fast — not fast food.";
let arrayString = s.split("");
console.log(s.toUpperCase());
