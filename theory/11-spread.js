const array1 = ['Javascript', 'Ruby', 'PHP'];
const array2 = ['Resctjs', 'Dart'];
const array3 = [...array2, ...array1];
console.log('🚀 ~ array3', array3);

// --------------------------------------------------------------------------//

const object1 = {
  name: 'javascript',
};

const object2 = {
  frameWork: 'Resctjs',
};

const object3 = {
  ...object1,
  ...object2,
};
console.log('🚀 ~ object3', object3);

// --------------------------------------------------------------------------//
