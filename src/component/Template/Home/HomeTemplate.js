import React from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
export const HomeTemplate = () => {
  const { t } = useTranslation();

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
