import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AsyncApp from './components/AsyncApp';
//import registerServiceWorker from './registerServiceWorker';
import stt from './reducers';

import './css/index.css';

const store = createStore(
  stt,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<AsyncApp
      obj={store.getState()}
      updateFormState={(n) => store.dispatch({ type: 'UPDATE_SELECTED_FORM_NAME', selectedFormName: n })}
    />,
    rootEl
  )
};
render();
store.subscribe(render);

//registerServiceWorker();
