export const preparePeopleMass = (people) => {
  if (people === null) {
    return people;
  }
  return people.reduce((acc, item) => acc + parseInt(item.mass), 0) / people.length;
};
