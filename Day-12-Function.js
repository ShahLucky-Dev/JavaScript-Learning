/* function myfunction(){ // function definition
    console.log("i am js learner")
}

myfunction(); // function call
*/

/* function sum(a,b){//parameter pass
   s = a+b;
   return s;
}

let val = sum(3,10);
console.log(val);
*/

// arrow function.

/*const arrowmul = (a,b) =>{
    return a*b;
};*/

//practice question for count vowels in string...

// function countvowel(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// function birthday(name) {
//   console.log("happy birthday to " + name);
//   console.log("god bless you " + name);
//   console.log(name + "you are the best");
// }

// birthday("lucky");

// function sum(x, y) {
//   console.log(x + y);
//   console.log(x - y);
//   // if i write return here the return is only work once in code
// }

// sum(5, 4);

// console.log("the ans is", result);

const func = (x) => {
  console.log("this is my arrow function", x);
};

func(25);
func(66);
func(84);

function add(a, b) {
  return a + b;
}
add(2, 5);

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

checkEvenOdd(5);

function findLargest(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "both are same";
  }
}

findLargest(10, 20);
findLargest(50, 50);

const sq = (num) => {
  return num * num;
};

console.log(sq(5));

const add = (a, b) => a + b;
console.log(add(15, 25));

const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
