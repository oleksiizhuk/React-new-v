export const getRandomAPI = (aim) => {
  const random = Math.round(Math.random(1));
  const correctUrl = `https://swapi.dev/api/${aim}`;
  const incorrectUrl = 'https://swapi.dev/api/432423planets';
  return random ? correctUrl : incorrectUrl;
};
