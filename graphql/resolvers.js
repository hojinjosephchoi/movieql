const hojin = {
  name: 'Hojin',
  age: 32,
  gender: 'male'
};

const resolvers = {
  Query: {
    person: () => hojin
  }
};

export default resolvers;