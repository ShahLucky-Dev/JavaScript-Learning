/*let arr1 = ["a", " b"]; // array
let arr2 = ["c", "d"];

let result = [...arr1, ...arr2];

console.log(result);

let user = {
  name: "lucky",
  age: 19,
};

let newuser = {
  ...user,
  city: "surat",
};

console.log(newuser);*/

let frontend = ["html", "css", "js"];
let backend = ["nodejs", "mongodb"];

let fullstack = [...frontend, ...backend];

console.log(fullstack);

let student = {
  name: "lucky",
  age: 20,
};

let newStudent = { ...student, city: "surat" };

console.log(newStudent);

let employee = {
  name: "Lucky",
  age: 20,
  city: "Surat",
};

let updatedEmployee = { ...employee, age: 21, course: "bca" };

console.log(updatedEmployee);
