// TRUTHY COERSED values
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// only some FALSY values
// if (undefined)
// if (null)
// if (0)
// if ('')

// The nullish coalescing operator ?? ONLY interprets
// `null` or `undefined` values as FALSY

// Original approach
{
  const x = "";
  const val = x || "default";
  console.log(val);
}

// With the new operator (ES2020)
{
  const x = "";
  const val = x ?? "default";
  console.log(val);
}
