import { setStarships, updateIsLoadingStarships, setStarshipError } from '../actions-types/starships';
import { getRandomAPI } from '../../utils/getRandomApi/getRandomAPI';

export const fetchStarship = () => async (dispatch) => {
  try {
    const api = getRandomAPI('starships');
    dispatch(updateIsLoadingStarships(true));
    const response = await fetch(api);
    const data = await response.json();
    dispatch(setStarships(data.results));
  } catch (e) {
    dispatch(setStarshipError(true));
    dispatch(updateIsLoadingStarships(false));
  }
};
