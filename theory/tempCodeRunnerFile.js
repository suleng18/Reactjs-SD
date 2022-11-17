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