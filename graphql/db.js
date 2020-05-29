const sangjun = {
  id: 0,
  name: "Sangjun",
  age: 25,
  gender: "male",
};

const tommy = {
  id: 1,
  name: "Tommy",
  age: 30,
  gender: "male",
};

const people = [sangjun, tommy];
const getById = id => people.filter(person => person.id === id)[0];
module.exports = {
  people,
  getById,
};
