import React from 'react';
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('helloWorld')}</p>
    </div>
  );
};
