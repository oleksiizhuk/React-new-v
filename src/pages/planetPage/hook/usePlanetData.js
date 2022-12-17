import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanet } from '../../../store/actions/planets';
import { selectPlanet } from '../../../store/selector/planets';

export const usePlanetData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlanet());
  }, []);

  const peoples = useSelector(selectPlanet);
  return { peoples };
};
