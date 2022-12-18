import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanet } from '../../../store/actions/planets';
import { selectLoading, selectPlanets, selectPlanetError } from '../../../store/selector/planets';

export const usePlanetData = () => {
  const dispatch = useDispatch();
  const loadPlanet = useCallback(() => {
    dispatch(fetchPlanet());
  }, [dispatch]);
  useEffect(() => {
    loadPlanet();
  }, [loadPlanet]);
  
  const isLoading = useSelector(selectLoading);
  const planets = useSelector(selectPlanets);
  const isError = useSelector(selectPlanetError);
  return {
    planets, isLoading, isError, loadPlanet 
  };
};
