export const people = [
  {
    id:'1',
    name: "Park",
    age: 24,
    gender: "male"
  },
  {
    id:'2',
    name: "Kim",
    age: 35,
    gender: "male"
  },
  {
    id:'3',
    name: "Lee",
    age: 7,
    gender: "male"
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
}