import { setPlanets, updateIsLoadingPlanets, setPlanetError } from '../actions-types/planets';

const getRandomAPI = () => {
  const random = Math.round(Math.random(1));
  const correctUrl = 'https://swapi.dev/api/planets';
  const incorrectUrl = 'https://swapi.dev/api/432423planets';
  return random ? correctUrl : incorrectUrl;
};

export const fetchPlanet = () => async (dispatch) => {
  try {
    const api = getRandomAPI();
    dispatch(updateIsLoadingPlanets(true));
    const response = await fetch(api);
    const data = await response.json();
    dispatch(setPlanets(data.results));
  } catch (e) {  
    dispatch(setPlanetError(true));
    dispatch(updateIsLoadingPlanets(false));   
  }
};
