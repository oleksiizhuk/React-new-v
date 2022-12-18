import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPeople } from '../../../store/actions/people';
import { selectPeoples } from '../../../store/selector/people';

export const usePeopleData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPeople());
  }, [dispatch]);
  
  const peoples = useSelector(selectPeoples);
  return { peoples };
};
