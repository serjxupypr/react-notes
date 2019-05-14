import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './App';
import { TodosReducer } from './reducers/reducers'

let store = createStore(TodosReducer, [{
  id: 0,
  text: 'ох йой! тут уже кто-то был...',
  completed: true,
}]);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  );
