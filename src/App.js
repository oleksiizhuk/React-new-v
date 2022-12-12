import {Navigation} from './navigation/Navigation'
import {BrowserRouter} from 'react-router-dom'
import translate from "./services/translate/TranslateService";

function App() {

  translate.init()


  return (
    <BrowserRouter>
      <Navigation/>
    </BrowserRouter>
  );
}

export default App;
