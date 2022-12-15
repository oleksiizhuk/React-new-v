import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../../store/actions/app';
import { selectLoading, selectPeople } from '../../../store/selector/app';

export const useHomeData = () => {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(selectLoading);
  const people = useSelector(selectPeople);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log('isLoading = ', isLoading);
  return {
    isLoading,
    people,
  };
};
