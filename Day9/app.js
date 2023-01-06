let inputText = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  switch (inputText.value) {
    case "C":
      create();
      break;
    case "R":
      read();
      break;
    case "U":
      update();
      break;
    case "D":
      deleteProduct();
      break;
    default:
      console.log("Wrong input");
  }
});

function create() {
  let numberOfProduct = Number(prompt("Enter number of product"));
  let newArray = [];
  for (let i = 0; i < numberOfProduct; i++) {
    let t = prompt("Enter product's name at " + (i + 1));
    newArray.push(t);
  }

  if (localStorage.getItem("Menu") == null) {
    localStorage.setItem("Menu", JSON.stringify(newArray));
  }
}

function read() {
  let localStorageArray = JSON.parse(localStorage.getItem("Menu"));

  for (i of localStorageArray) {
    console.log(i);
  }
}

function update() {
  if (localStorage.getItem("Menu") != null) {
    let chooseProductInArray = prompt("Choose a product you want to change");
    let input = prompt("Enter new food to array");
    if (chooseProductInArray != null && input != null) {
      //   Get menu array from localStorage
      let localStorageArray = JSON.parse(localStorage.getItem("Menu"));
      //

      let checkContain = localStorageArray.includes(chooseProductInArray);
      if (checkContain == true) {
        let indexOfProductInArray =
          localStorageArray.indexOf(chooseProductInArray);
        localStorageArray.splice(indexOfProductInArray, 1, input);
        localStorage.setItem("Menu", JSON.stringify(localStorageArray));
      } else {
        localStorageArray.push(input);
        localStorage.setItem("Menu", JSON.stringify(localStorageArray));
      }
    }
  }
}

function deleteProduct() {
  let localName = prompt("Enter localName");
  if (localStorage.getItem(localName) == null) {
    alert("Wrong local name. Please check again");
  } else {
    let localStorageArray = JSON.parse(localStorage.getItem(localName));
    let deletePro = prompt("What product you want to delete");

    for (let i = 0; i < localStorageArray.length; i++) {
      if (localStorageArray[i] == deletePro) {
        localStorageArray.splice(i, 1);
      }
    }
    localStorage.setItem("Menu", JSON.stringify(localStorageArray));
  }
}
