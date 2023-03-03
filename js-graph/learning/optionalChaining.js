const obj = undefined;

// Instead of this
if (obj) {
  obj.foo;
}
// OR
obj && obj.foo;

// We can just do this
obj?.foo;

console.log(obj?.foo);
console.log(obj?.foo?.bar);
