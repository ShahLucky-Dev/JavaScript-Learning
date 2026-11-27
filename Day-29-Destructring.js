/*

const user = {
  name: "lucky",
  age: 19,
};

const { name, age } = user;

console.log(name);
console.log(age);*/

let employee = {
  name: "Rahul",
  salary: 25000,
  department: "IT",
  city: "Surat",
};

//let { name, salary, city } = employee;

console.log(name);
console.log(salary);
console.log(city);

let product = {
  name: "laptop",
  price: 50000,
  brand: "lenevo",
};

let { name: productName, price: productPrice } = product;

console.log(productName);
console.log(productPrice);

let user = {
  name: "lucky",
  address: {
    city: "surat",
    state: "gujarat",
  },
};

let {
  name,
  address: { city },
} = user;
console.log(name);
console.log(city);
