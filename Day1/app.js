// [2       ,11      ,16      ,7]  k=9
//  0         1      2        3
// i                               i < array.length
// j                               j < array.length

// function ex1(array, k) {

// }

// function sayHello(a, b) {
//   console.log(a + b);
// }

// sayHello(1, 2);

// function SumTwoNumber() {
//   //   console.log(1 + 200);
//   // return 1 + 200;
//   return 1 + 200;
// }

// console.log(typeof SumTwoNumber());

// 3 kiểu function: Kiểu 1 k có đâu vào,
//                  Kiểu 2 có tham số đầu vào
//                  Kiểu 3 là có return
// -> Giá trị: Tên của bọn em

// Kiểu 1: Function k có đầu vào
function MyName1() {
  console.log("Nguyễn Danh Phương");
}

MyName1();

// Kiểu 2: Function có tham số đầu vào
function MyName2(a, b, c) {
  console.log(a + " " + b + " " + c);
}

MyName2("Nguyễn", "Danh", "Phương");

// Kiểu 3: Function có giá trị return
function MyName3() {
  return "Nguyễn Danh Phương";
}

console.log(MyName3());

// Kiểu mix giữa kiểu 3 và kiểu 2

function MyName4(a, b, c) {
  return a + " " + b + " " + c;
}

console.log(MyName4("Nguyễn", "Danh", "Phương"));

//
function tinhDienTichHinhThang(dayLon, dayBe, chieuCao) {
  // xử code dựa trên các giá trị dayLon, dayBe, chieuCao
  // Để tìm ra diện tích hình thang
  let s = ((dayLon + dayBe) * chieuCao) / 2;
  return s;
}

console.log("Diện tích hình thang: " + tinhDienTichHinhThang(5, 6, 7));

console.log("------------------");

let array = [2, 11, 16, 7];
// array.length = 4
//           i--> i
//                j
let k = 9;
let emptyArray = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] == k) {
      //   console.log("Number 1 = " + array[i]);
      //   console.log("Number 2 = " + array[j]);
      emptyArray.push(i);
      emptyArray.push(j);
    }
  }
}

console.log(emptyArray);
