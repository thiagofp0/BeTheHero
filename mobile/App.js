import intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket', 'Encountered two children']);

import Routes from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}
