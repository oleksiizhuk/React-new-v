import React from 'react';
import { usePeopleData } from './hook/usePeopleData';
import { PeopleTemplate } from '../../component/Template/People/PeopleTemplate';

export const PeoplePage = () => {
  const { peoples } = usePeopleData();

  return (
    <PeopleTemplate peoples={peoples} />
  );
};
