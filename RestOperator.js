function student(name, ...subjects) {
  console.log(name);
  console.log(subjects);
}

student("lucky", "html", "css", "js", "react");

function calculate(first, ...numbers) {
  console.log(first);
  console.log(numbers);
  let total = numbers.reduce((sum, num) => {
    return sum + num;
  }, 0);
  console.log(total);
}
calculate(100, 200, 300, 400, 500);

function shoppingCart(...price) {
  let total = price.reduce((sum, num) => {
    return sum + num;
  }, 0);
  console.log(total);
}

shoppingCart(100, 200, 300, 400);
