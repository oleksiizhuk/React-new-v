import { setPlanets, updateIsLoadingPlanets, setPlanetError } from '../actions-types/planets';
import { getRandomAPI } from '../../utils/getRandomApi/getRandomAPI';

export const fetchPlanet = () => async (dispatch) => {
  try {
    const api = getRandomAPI('planets');
    dispatch(updateIsLoadingPlanets(true));
    const response = await fetch(api);
    const data = await response.json();
    dispatch(setPlanets(data.results));
  } catch (e) {  
    dispatch(setPlanetError(true));
    dispatch(updateIsLoadingPlanets(false));   
  }
};
