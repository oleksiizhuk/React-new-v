import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Navigation } from './navigation/Navigation';
import translate from './services/translate/TranslateService';
import { Header } from './component/Header/Header';

const App = () => {
  translate.init();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Navigation />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
