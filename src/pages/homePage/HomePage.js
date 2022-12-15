import React from 'react';
import { useHomeData } from './hook/useHomeData';
import { HomeTemplate } from '../../component/Template/Home/HomeTemplate';
import { SuspenseView } from '../../component/SuspenseView/SuspenseView';

export const HomePage = () => {
  const { isLoading, people } = useHomeData();
  return (
    <SuspenseView isLoading={isLoading}>
      <HomeTemplate people={people} />
    </SuspenseView>
  );
};
