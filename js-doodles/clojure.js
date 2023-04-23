// Clojure are functions combined with thier lexical enviroment
// They store the data needed from outside of the functions -
// scope and the function in the HEAP, so available longer.

// It's a function that closes over some state/data.

// This is a closure
let b = 3;

function impureFun(a) {
  return a + b;
}

// This is a closure
function outer() {
  let x = 1;
  function inner() {
    x = x + 1;
    console.log(x);
  }
  return inner;
}

const incrementX = outer();
incrementX();
incrementX();
incrementX();
incrementX();
