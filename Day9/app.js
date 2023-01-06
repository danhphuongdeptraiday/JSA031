let array = ["a", "b", "c", "d", "e"];
if (localStorage.getItem("Menu") == null) {
  localStorage.setItem("Menu", JSON.stringify(array));
}

function update() {
  if (localStorage.getItem("Menu") != null) {
    let chooseProductInArray = prompt("Choose a product you want to change");
    let input = prompt("Enter new food to array");

    console.log(chooseProductInArray);
    console.log(input);
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

// console.log(temptArray);
