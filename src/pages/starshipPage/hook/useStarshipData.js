import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStarship } from '../../../store/actions/starships';
import { selectStarships } from '../../../store/selector/starship';

export const useStarshipData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStarship());
  }, [dispatch]);

  const starships = useSelector(selectStarships);
  return { starships };
};
