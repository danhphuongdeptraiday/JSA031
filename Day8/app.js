// // CallBack
// //  Ví dụ 1 function mà trong function đấy ta lại gọi 1 function khác

// function loginForm(username, password) {
//   // Check user name
//   //   if (username == "Phuong" && password == "abc123") {
//   //     checkUserSuccess();
//   //     checkPasswordSuccess();
//   //   } else {
//   //     checkUserError();
//   //   }
//   //   if (password == "abc123") {
//   //     checkPasswordSuccess();
//   //   } else {
//   //     checkPasswordError();
//   //   }

//   if (username == "Phuong") {
//     checkUserSuccess();
//     if (password == "abc123") {
//       checkPasswordSuccess();
//     } else {
//       checkPasswordError();
//     }
//   } else {
//     checkUserError();
//   }
// }

// // Chức năng hộ trợ cho quá trình login

// function checkUserSuccess() {
//   console.log("Username true !!");
// }

// function checkUserError() {
//   console.log("Username is wrong or not valid please check again !!");
// }

// function checkPasswordSuccess() {
//   console.log("Password true !!");
// }

// function checkPasswordError() {
//   console.log("Password is wrong !!");
// }

// loginForm("Phuong", "abc1234");

//

// const hello = () => {
//   return "123";
//   //   console.log("Hello mindx !!!");
// };

// const hello = () => "123";

// const hello = (a, b) => a + " and " + b;

// console.log(hello("phuong", "ly"));
// hello();
// function hello() {
//   console.log("Hello mindx !!!");
// }

// let input = "C";

// if(input == "C") {
//     create()
// } else if( input == "R") {
//     read()
// }

let array = ["Banana", "Orange", "Apple", "Mango"];

let viTriUpdateTrongArray = array.indexOf("Mango"); // trả về vị giá trị mà bạn muốn update trong mảng

array[viTriUpdateTrongArray] = "DanhPhuongdzai";

console.log(array);
// array.join()
