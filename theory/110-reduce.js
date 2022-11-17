let courseList = [
  { id: 1, name: 'Javascript', coin: 0 },
  { id: 2, name: 'HTML,CSS', coin: 11 },
  { id: 3, name: 'React', coin: 20 },
  { id: 4, name: 'Bootstrap', coin: 90 },
];

let totalCoin = 0;

for (let course of courseList) {
  totalCoin += course.coin;
}
console.log(totalCoin);

// ------------------------------------------------------- //

let courseList1 = [
  { id: 1, name: 'Javascript', coin: 0 },
  { id: 2, name: 'HTML,CSS', coin: 11 },
  { id: 3, name: 'React', coin: 20 },
  { id: 4, name: 'Bootstrap', coin: 90 },
];

const totalCoin1 = courseList1.reduce((a, b) => a + b.coin, 0);

console.log(totalCoin1);

// ------------------------------------------------------- //

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}
const result = array.reduce(reducer);
console.log('🚀 ~ result', result);

// ------------------------------------------------------- //
let courseList2 = [
  { id: 1, name: 'Javascript', coin: 0 },
  { id: 2, name: 'HTML,CSS', coin: 11 },
  { id: 3, name: 'React', coin: 20 },
  { id: 4, name: 'Bootstrap', coin: 90 },
];

const totalCoin2 = courseList2.reduce(function (total, course) {
  console.log(total);
  return total + course.coin;
}, 0);
console.log('🚀 ~ totalCoin2', totalCoin2);

// ------------------------------------------------------- //

const number = [100, 200, 220, 210, 180];

const total = number.reduce(function (total, number) {
  return total + number;
});
console.log('🚀 ~ total', total);

// ------------------------------------------------------- //

let depthArray = [1, 2, [[3, 4], 5], 6, [7, 8, 9]].flat();
const flatArray = depthArray.reduce((acc, depItem) => acc.concat(depItem), []);
console.log('🚀 ~ flatArray', flatArray);

// ------------------------------------------------------- //
let topicList = [
  {
    topic: 'Front end',
    courses: [
      { id: 1, title: 'HTLM CSS' },
      { id: 2, title: 'Javascript' },
    ],
  },
  {
    topic: 'Back end',
    courses: [
      { id: 1, title: 'PHP' },
      { id: 2, title: 'NodeJs' },
    ],
  },
];

const newCourse = topicList.reduce(function (courses, topic) {
  return courses.concat(topic.courses);
}, []);
console.log('🚀 ~ newCourse', newCourse);

const html = newCourse.map(
  (course) =>
    `
    <div>
      <h2>${course.title}</h2>
      <p>${course.id}</p>
    </div>
    `,
);
console.log('🚀 ~ html', html);
console.log('🚀 ~ html', html.join(''));

// ------------------------------------------------------- //

var watchList = [
  {
    Director: 'Christopher Nolan',
    imdbRating: '8.8',
  },
  {
    Director: 'Christopher Nolan',
    imdbRating: '8.6',
  },
  {
    Director: 'Christopher Nolan',
    imdbRating: '9.0',
  },
  {
    Director: 'Christopher Nolan',
    imdbRating: '8.3',
  },
  {
    Director: 'James Cameron',
    imdbRating: '7.9',
  },
];

function calculateRating(watchList) {
  const newArray = watchList.filter((watch) => watch.Director === 'Christopher Nolan');
  return newArray.reduce(
    (acc, currentWatch) => acc + Number.parseFloat(currentWatch.imdbRating) / newArray.length,
    0,
  );
}
// Expected results
console.log(calculateRating(watchList)); // Output: 8.675

// ------------------------------------------------------- //

const numberList = [1, 2, 3, 4, 5];
const result1 = numberList.reduce((total, number, index) => {
  return total + number;
});
console.log('🚀 ~ result1', result1);
