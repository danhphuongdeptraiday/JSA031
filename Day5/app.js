// let t = "1";
// console.log("t = " + t);
// t = t + "1";
// console.log("t = " + t);
// t = t + "1";
// console.log("t = " + t);

// console.log(s);

// Bài 1
// let listNumber = document.getElementById("listNumber");
// let listEvenNumber = [];

// function findEven(number) {
//   if (number < 4 || number > 20) {
//     console.log("Wrong input number. Please check again !!!");
//     return;
//   } else {
//     for (let i = 4; i < number; i++) {
//       if (i % 2 == 0) {
//         listEvenNumber.push(i);
//       }
//     }
//   }
// }

// let n = Number(prompt("Input n from 4 -> 20: "));
// findEven(n);

// console.log(listEvenNumber);
// for (i of listEvenNumber) {
//   listNumber.innerHTML = listNumber.innerHTML + i + " ";
// }

//Bài 2
// let box = document.querySelector(".container");

// box.addEventListener("mouseover", function () {
//   box.style.backgroundColor = "red";
// });

// box.addEventListener("mouseout", function () {
//   box.style.backgroundColor = "blue";
// });

// console.log("Phuong\nNguyen");

// setTimeout(function () {
//   console.log("Phương");
// }, 3000);
// // console.log("Phuong");
// console.log("Nguyễn");

// Bài 3

// let s = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 0; j < i; j++) {
//     s = s + "1";
//   }
//   //   console.log("Giá trị của s ở dòng thứ " + i + " = " + s);
//   s = s + "\n"; // Xuống dòng từng hàng
// }

// console.log(s);

// let t = setInterval(function () {
//   console.log(1);
// }, 1000);

// clearInterval(t);

// // setTimeout(function () {
// //   console.log(2);
// // }, 2000);

// // setTimeout(function () {
// //   console.log(3);
// // }, 3000);

// let username = document.getElementById("username");
// let password = document.getElementById("password");

// document.getElementById("btn").addEventListener("click", function (e) {
//   e.preventDefault();

//   localStorage.setItem("username", username.value);
//   localStorage.setItem("password", password.value);

//   console.log(username.value);
//   console.log(password.value);

//   username.value = "";
//   password.value = "";
// });
