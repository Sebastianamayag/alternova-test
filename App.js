import * as React from 'react';
import { createStore, applyMiddleware,compose} from 'redux';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { Navigation } from './src/navigation/navigation';
import ReduxConfigure from './src/store/config/reduxConfigure';
const composeSetup = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {};
const middleware = [thunk];
const Store = createStore(
 ReduxConfigure,
 initialState,
 composeSetup(applyMiddleware(...middleware))
);
function App() {
  return (
    <Provider store={Store}>
      <Navigation/>
    </Provider>
  );
}

export default App;