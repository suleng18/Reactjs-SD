function destructuringObjcet({ name, price, ...rest }) {
  console.log(name, price, rest);
}

destructuringObjcet({
  name: 'javascript',
  price: 10000,
  desc: 'hihi',
});

// --------------------------------------------------------------------------//

function destructuringArray([a, b, ...rest]) {
  console.log(a);
  console.log(b);
  console.log(rest);
}

destructuringArray([2, 3, 4, 5]);

[a, b, c, d, ...rest] = [2, 3, 4, 5, 5, 6, 7, 7];
console.log(a, b);
console.log(rest);
// --------------------------------------------------------------------------//
