import React from 'react';
import SeriesApp from './src/SeriesApp';

export default function App() {
  if (__DEV__) {
    require('react-devtools');
  }
  return <SeriesApp />;
}
