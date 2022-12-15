import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './navigation/Navigation';
import translate from './services/translate/TranslateService';

const App = () => {
  translate.init();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
