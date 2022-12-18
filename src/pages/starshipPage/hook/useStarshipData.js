import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarship } from '../../../store/actions/starships';
// eslint-disable-next-line import/named
import { selectLoading, selectStarshipError, selectStarships } from '../../../store/selector/starship';

export const useStarshipData = () => {
  const dispatch = useDispatch();
  const loadStarship = useCallback(() => {
    dispatch(fetchStarship());
  }, [dispatch]);
  useEffect(() => {
    loadStarship();
  }, [loadStarship]);

  const isLoading = useSelector(selectLoading);
  const starships = useSelector(selectStarships);
  const isError = useSelector(selectStarshipError);
  return {
    starships, isLoading, isError, loadStarship 
  };
};
