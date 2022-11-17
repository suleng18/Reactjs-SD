const array = ['java', 'PHP', 'Ruby'];
const [a, ...rest] = array;
console.log(a, rest);

var course = {
  name: 'javaScript',
  price: 1000,
  image: 'image-address',
  description: 'hehe',
};

var { name, description = 'default' } = course;
console.log('🚀 ~ description', description);

// --------------------------------------------------------------------------//

const { a1 = 'default', b, ...rest1 } = { b: 'val1', c: 'val2', d: 'val3' };
console.log(a1, b, rest1); // Output: ?
// --------------------------------------------------------------------------//
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = JSON.parse(JSON.stringify(obj3));
obj3.a = 4;
obj3.b.c = 4;
console.log(obj3);
