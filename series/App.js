import React from 'react';
import SeriesApp from './src/SeriesApp';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Setting a timer for a long period of time']);
export default function App() {
  // if (__DEV__) {
  //   require('react-devtools');
  // }
  return <SeriesApp />;
}
