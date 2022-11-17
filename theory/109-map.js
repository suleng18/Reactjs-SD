let courseList = [
  { id: 1, name: 'Javascript', coin: 0 },
  { id: 2, name: 'HTML,CSS', coin: 11 },
  { id: 3, name: 'React', coin: 20 },
  { id: 4, name: 'Bootstrap', coin: 90 },
];

let newCourse = courseList.map((course) => {
  // console.log(course);
  return {
    id: course.id,
    name: `Khoc hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia:${course.coin}`,
  };
});

console.log(newCourse);

// -------------------------------------------------------------- //

function map(arr, mapFn) {
  if (!Array.isArray(arr) || typeof mapFn !== 'function') return undefined;

  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const newElement = mapFn(element, i);
    newArray.push(newElement);
  }

  return newArray;
}
console.log(map([12, 23, 34], (x) => x + 2));
console.log([12, 11, 14].map((x) => x % 2 === 0));

// -------------------------------------------------------------- //

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
const result = kvArray.map((value) => {
  const obj = {};
  obj[value.key] = value.value;
  return obj;
});

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log('🚀 ~ reformattedArray', reformattedArray);
console.log('🚀 ~ kvArray', kvArray);
