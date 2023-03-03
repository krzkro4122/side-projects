// INTRO
// Function declaration - hoisted -> always available from the very top of this file (global)
function sayHi(message) {
  return "hi " + message + "!";
}
// Function expression - not hoisted -> created only when encountered in code (scoped) + they can be anonymous
const sayHi2 = function (message) {
  return "hi " + message + "!";
};

// Wrapper function
function funWrapper(callback) {
  console.log(callback("Called by wrapper!"));
}

funWrapper(sayHi);
funWrapper((m) => m + " " + m);

// Function factory
function funCreator() {
  return function (message) {
    console.log("Said..." + message);
  };
}

const fn = funCreator();
fn("Hi!");

// END INTRO

function multiply(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

function add(...numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(multiply(1, 2, 3, 4));
console.log(add(1, 2, 3, 4));

// HOF - higher order function
function calculate(operation, ...numbers) {
  return operation(...numbers);
}
console.log(calculate(multiply, 1, 2, 3, 4));
console.log(calculate(add, 1, 2, 3, 4));
