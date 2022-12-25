if (localStorage.getItem("todoList") == null) {
  localStorage.setItem("todoList", JSON.stringify([]));
}

let input = document.querySelector("input");

document.querySelector("#createBtn").addEventListener("click", () => {
  let inputValue = input.value;

  let div = document.createElement("div");
  div.className = "listItems";

  let h3 = document.createElement("h3");
  h3.innerHTML = inputValue;

  let button = document.createElement("button");
  button.innerHTML = "Delete";

  div.appendChild(h3);
  div.appendChild(button);

  document.querySelector(".containerList").appendChild(div);

  let arrayDeleteButton = document.querySelectorAll(".listItems button");
  for (let i = 0; i < arrayDeleteButton.length; i++) {
    arrayDeleteButton[i].addEventListener("click", () => {
      console.log("123");
      arrayDeleteButton[i].parentElement.remove();
    });
  }

  //                                             Phần thêm vào localStorage

  //   if (inputValue != "") {
  //     if (localStorage.getItem("todoList") == null) {
  //       localStorage.setItem("todoList", JSON.stringify([]));
  //     } else {
  //       let listItems = JSON.parse(localStorage.getItem("todoList"));
  //       listItems.push(inputValue);
  //       localStorage.setItem("todoList", JSON.stringify(listItems));

  //       //   Xử lý phần xóa dữ liệu
  //       let arrayDeleteButton = document.querySelectorAll(".listItems button");
  //       for (let i = 0; i < arrayDeleteButton.length; i++) {
  //         arrayDeleteButton[i].addEventListener("click", () => {
  //           console.log("123");
  //           arrayDeleteButton[i].parentElement.remove();
  //         });
  //       }
  //     }
  //   }

  //   let div = document.createElement("div");
  //   div.className = "listItems";

  //   let h3 = document.createElement("h3");
  //   h3.innerHTML = inputValue;

  //   let button = document.createElement("button");
  //   button.innerHTML = "Delete";

  //   div.appendChild(h3);
  //   div.appendChild(button);

  //   document.querySelector(".containerList").appendChild(div);

  //   Lưu vào localStorage

  input.value = "";
});

//                                             Phần thêm vào localStorage

// let listItems = JSON.parse(localStorage.getItem("todoList"));
// for (let i = 0; i < listItems.length; i++) {
//   let div = document.createElement("div");
//   div.className = "listItems";

//   let h3 = document.createElement("h3");
//   h3.innerHTML = listItems[i];

//   let button = document.createElement("button");
//   button.innerHTML = "Delete";

//   div.appendChild(h3);
//   div.appendChild(button);

//   document.querySelector(".containerList").appendChild(div);

//   //   Xử lý phần xóa dữ liệu
//   let arrayDeleteButton = document.querySelectorAll(".listItems button");
//   for (let i = 0; i < arrayDeleteButton.length; i++) {
//     arrayDeleteButton[i].addEventListener("click", () => {
//       console.log("123");
//       arrayDeleteButton[i].parentElement.remove();
//     });
//   }
// }
