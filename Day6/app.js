// let person1 = {
//   name: "Phuong",
//   age: 100,
// };
// // console.log(person1);
// // let s = JSON.stringify(person1);
// // console.log(s);
// // let q = JSON.parse(s);
// // console.log(q);
// // console.log(s[2]);

// let person2 = {
//   name: "Nhat",
//   age: 16,
// };

// let person3 = {
//   name: "Hung",
//   age: 100,
// };

let list_person_object = [];
let t = JSON.parse(localStorage.getItem("listUser"));
if (t == null) {
  localStorage.setItem("listUser", JSON.stringify(list_person_object));
  window.location.reload();
} else {
  let list = JSON.parse(localStorage.getItem("listUser"));

  let btn = document.querySelector(".form button");
  btn.addEventListener("click", function () {
    let newUser = {};
    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;

    newUser = {
      username: usernameInput,
      password: passwordInput,
    };

    if (list.length < 1) {
      list.push(newUser);
      localStorage.setItem("listUser", JSON.stringify(list));
      alert("Create successful");
    } else {
      if (checkValidUser() == true) {
        list.push(newUser);
        localStorage.setItem("listUser", JSON.stringify(list));
        alert("Create successful");
      } else {
        alert("User existed");
        window.location.reload();
      }
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
}

// Check user input và check user từ localStorage, nếu chúng bắng nhau thì trả về false, nếu không bằng trả về true

function checkValidUser() {
  let user = document.getElementById("username").value;
  console.log(user);
  let arrayUsers = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < arrayUsers.length; i++) {
    if (arrayUsers[i].username !== user) {
      console.log(arrayUsers[i].username);
      return true;
    } else {
      return false;
    }
  }
  return false;
}

// localStorage.clear();
