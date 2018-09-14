export const people = [
  {
    id: '0',
    name: 'Hojin',
    age: 32,
    gender: 'male'
  },
  {
    id: '1',
    name: 'Hello',
    age: 32,
    gender: 'male'
  },
  {
    id: '2',
    name: 'World',
    age: 32,
    gender: 'male'
  },
  {
    id: '3',
    name: 'Go',
    age: 32,
    gender: 'male'
  },
  {
    id: '4',
    name: 'Java',
    age: 32,
    gender: 'male'
  },
  {
    id: '5',
    name: 'Script',
    age: 32,
    gender: 'male'
  },
  {
    id: '6',
    name: 'Python',
    age: 32,
    gender: 'male'
  },
  {
    id: '7',
    name: 'C',
    age: 32,
    gender: 'male'
  }
];


export const getById = (id) => {
  const filteredPeople = people.filter(person => String(id) === person.id);
  return filteredPeople[0];
}