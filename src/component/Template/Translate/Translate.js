import React from 'react';
import translate from '../../../services/translate/TranslateService';

export const Translate = () => {
  return (
    <div>
      <button type="button" onClick={() => translate.changeLanguage('en')}>
        <p>change language en</p>
      </button>

      <button type="button" onClick={() => translate.changeLanguage('pl')}>
        <p>change language pl</p>
      </button>
    </div>
  );
};
