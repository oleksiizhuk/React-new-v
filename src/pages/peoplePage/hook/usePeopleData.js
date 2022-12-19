import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../../../store/actions/people';
import {
  // eslint-disable-next-line import/named
  selectPeoples, selectLoading, selectPeopleError, getPeopleMass
} from '../../../store/selector/people';

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
  const mass = useSelector(getPeopleMass);
  console.log('MASS', mass);
  return {
    peoples, loadPeople, isLoading, isError, 
  };
};
