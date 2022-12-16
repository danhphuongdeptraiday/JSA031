let person1 = {
  name: "Phuong",
  age: 100,
};
// console.log(person1);
// let s = JSON.stringify(person1);
// console.log(s);
// let q = JSON.parse(s);
// console.log(q);
// console.log(s[2]);

let person2 = {
  name: "Nhat",
  age: 16,
};

let person3 = {
  name: "Hung",
  age: 100,
};

// list_person_object.push(person1);
// list_person_object.push(person2);
// list_person_object.push(person3);
let list_person_object = [];
let t = JSON.parse(localStorage.getItem("listUser"));
// console.log(t);
if (t == null) {
  localStorage.setItem("listUser", JSON.stringify(list_person_object));
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

    list.push(newUser);
    localStorage.setItem("listUser", JSON.stringify(list));

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  });
}

// localStorage.clear();
