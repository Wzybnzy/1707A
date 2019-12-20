import React from 'react';
import logo from './logo.svg';
import './App.css';
import RootRouter from './router/index'
import {Provider} from 'react-redux'
import store from './store/index'
function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}

export default App;
