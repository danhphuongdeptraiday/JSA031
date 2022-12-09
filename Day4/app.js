// let array = ["Phuong", "Nhat", "Hung"];
// localStorage.setItem("List of name", array);

// localStorage.setItem("Age", "22");

// let s = "Danh Phuong dzai 123";
// let arrayString = s.split("1");
// console.log(arrayString);

// // let s = localStorage.getItem("List of name");
// // let newArray = s.split(",");

// // console.log(newArray[0]);

// localStorage.removeItem("name");
// localStorage.removeItem("List of name");
// localStorage.clear();

let inputName = document.getElementById("person_name");
let btn = document.getElementById("btn");
// let count = 1;
localStorage.setItem("ID", "1");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let id = Number(localStorage.getItem("ID"));
  localStorage.setItem(id, inputName.value);

  localStorage.setItem("ID", Number(id + 1));
  inputName.value = "";
  //   console.log(inputName.value);
  //   id++;
});

let ul = document.createElement("ul");
for (let i = 1; i < localStorage.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = localStorage.getItem(String(i));
  ul.appendChild(li);
}
console.log(localStorage.length);

console.log(ul);

document.body.appendChild(ul);
