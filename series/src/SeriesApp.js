import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'remote-redux-devtools';
import Routes from './Routes';
import rootReducer from './reducers';

const compose = composeWithDevTools({realtime: true});
const store = createStore(rootReducer, compose(applyMiddleware(reduxThunk)));

const SeriesApp = prop => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#2d37a8" />
    <Provider store={store}>
      <Routes />
    </Provider>
  </NavigationContainer>
);

export default SeriesApp;
