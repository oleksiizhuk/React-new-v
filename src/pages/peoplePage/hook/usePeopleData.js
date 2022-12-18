import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../../../store/actions/people';
import { selectPeoples, selectLoading, selectPeopleError } from '../../../store/selector/people';

export const usePeopleData = () => {
  const dispatch = useDispatch();
  const loadPeople = useCallback(() => {
    dispatch(fetchPeople());
  }, [dispatch]);
  useEffect(() => {
    loadPeople();
  }, [loadPeople]);
  
  const isLoading = useSelector(selectLoading);
  const peoples = useSelector(selectPeoples);
  const isError = useSelector(selectPeopleError);

  return {
    peoples, loadPeople, isLoading, isError 
  };
};
