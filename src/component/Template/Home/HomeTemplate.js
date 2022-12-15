import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
export const HomeTemplate = ({ people }) => {
  const { t } = useTranslation();

  console.log('people = ', people);
  return (
    <div>
      <p>{t('helloWorld')}</p>
      {/* <p>{people}</p> */}
      {/* {people ? people.map((item) => { */}
      {/*   return ( */}
      {/*     <div>{item}</div> */}
      {/*   ); */}
      {/* }) : null } */}
    </div>
  );
};
