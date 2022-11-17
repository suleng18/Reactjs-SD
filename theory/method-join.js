const persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

const result = persons.map((item) => [item.firstname, item.lastname].join('-'));
console.log('🚀 ~ result', result);
