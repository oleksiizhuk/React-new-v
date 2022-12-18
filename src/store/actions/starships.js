import { setStarships, updateIsLoadingStarships, setStarshipError } from '../actions-types/starships';

const getRandomAPI = () => {
  const random = Math.round(Math.random(1));
  const correctUrl = 'https://swapi.dev/api/starships';
  const incorrectUrl = 'https://swapi.dev/api/432423planets';
  return random ? correctUrl : incorrectUrl;
};

export const fetchStarship = () => async (dispatch) => {
  try {
    const api = getRandomAPI();
    dispatch(updateIsLoadingStarships(true));
    const response = await fetch(api);
    const data = await response.json();
    dispatch(setStarships(data.results));
  } catch (e) {
    dispatch(setStarshipError(true));
    dispatch(updateIsLoadingStarships(false));
  }
};
