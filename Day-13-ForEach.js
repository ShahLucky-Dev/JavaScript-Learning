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

let price = [100, 200, 300, 400];

let dbp = price.map((num) => {
  return num * 2;
});

console.log(dbp);

let numbers = [5, 10, 15, 20, 25];

let square = numbers.map((num) => {
  return num * num;
});

console.log(square);

let students = ["lucky", "ratan", "shivlal"];

let changeCase = students.map((std) => {
  return std.toLocaleLowerCase();
});

console.log(changeCase);
