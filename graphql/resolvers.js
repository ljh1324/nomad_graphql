
const hwanlee = {
  name: "Hwanlee",
  age: 24,
  gender: "male"
}

const resolvers = {
  Query: {
    person: () => hwanlee
  }
}

export default resolvers;