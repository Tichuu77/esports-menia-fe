import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import {store} from 'src/modules/store';
import RoutesComponent from 'src/view/shared/routes/RoutesComponent';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppInnerComponent />
      </BrowserRouter>
    </Provider>
  );
};

const AppInnerComponent = () => {
  const isDarkMode = useSelector(layoutSelectors.selectDarkMode);
 

  return (
   <div className={`${isDarkMode ? 'dark' : ''}`}>
      <RoutesComponent />
    </div>
  );
};

export default App;
