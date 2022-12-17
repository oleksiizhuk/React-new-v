import { setPlanets, updateIsLoadingPlanets } from '../actions-types/planets';

export const fetchPlanet = () => async (dispatch) => {
  try {
    dispatch(updateIsLoadingPlanets(true));
    const response = await fetch('https://swapi.dev/api/planets');
    const data = await response.json();
    console.log('result = ', data);

    dispatch(setPlanets(data.results));
    dispatch(updateIsLoadingPlanets(false));
  } catch (e) {
    dispatch(updateIsLoadingPlanets(false));
  }
};
