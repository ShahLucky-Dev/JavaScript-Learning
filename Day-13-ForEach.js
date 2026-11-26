/* let marks = [76, 85, 72, 82];

marks.forEach(function printmarks(mark) {
  console.log(mark);
});

marks.forEach((mark) => {
  console.log(mark);
});

*/

// give squer root for each element

let num = [25, 44, 78];

num.forEach((num) => {
  console.log(num * num);
});

// let students = ["lucky", "rahul", "aman", "jay"];

// students.forEach((std) => {
//   console.log(std);
// });

// let numbers = [10, 20, 30, 40, 50];

// let dn = numbers.forEach((num) => {
//   console.log(num * 2);
// });

let prices = [100, 200, 300, 400, 500];

prices.forEach((price) => {
  console.log(price + (price * 18) / 100);
});

//MAP

// let price = [100, 200, 300, 400];

// let dbp = price.map((num) => {
//   return num * 2;
// });

console.log(dbp);

/*let numbers = [5, 10, 15, 20, 25];

let square = numbers.map((num) => {
  return num * num;
});

console.log(square);

let students = ["lucky", "ratan", "shivlal"];

let changeCase = students.map((std) => {
  return std.toLocaleLowerCase();
});

console.log(changeCase);*/

//filter

let numbers = [10, 15, 20, 25, 30, 35, 40];

let result = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(result);

let age = [12, 15, 18, 16, 30, 44];
let aged = age.filter((num) => {
  return num >= 18;
});

console.log(aged);

let price = [100, 200, 25, 500, 1000];

let bp = price.filter((num) => {
  return num > 500;
});

console.log(bp);

// find

let ages = [12, 15, 18, 22, 25, 30];

let selected = ages.find((num) => {
  return num > 18;
});

console.log(selected);

let students = [
  { name: "Lucky", marks: 75 },
  { name: "Rahul", marks: 45 },
  { name: "Aman", marks: 90 },
  { name: "Jay", marks: 60 },
];

let stdt = students.find((std) => {
  return std.name === "Aman";
});

let products = [
  { name: "Mobile", price: 15000 },
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1000 },
];

let product = products.find((prd) => {
  return prd.price > 1000;
});
