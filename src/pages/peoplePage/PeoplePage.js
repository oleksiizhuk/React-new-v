import React from 'react';
import { usePeopleData } from './hook/usePeopleData';
import { PeopleTemplate } from '../../component/Template/People/PeopleTemplate';
import { SuspenseView } from '../../component/SuspenseView/SuspenseView';

export const PeoplePage = () => {
  const {
    peoples, loadPeople, isError, isLoading 
  } = usePeopleData();

  return (
    <SuspenseView isError={isError} isLoading={isLoading} onTryAgainClick={loadPeople}>
      <PeopleTemplate peoples={peoples} />
    </SuspenseView>
  );
};
