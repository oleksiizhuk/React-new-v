import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './navigation/Navigation';
import translate from './services/translate/TranslateService';

const App = () => {
  translate.init();

  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
