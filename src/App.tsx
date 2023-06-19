import React, { FunctionComponent } from 'react';
import { appConfig } from './constants';
import MainWrapper from './container/MainWrapper';

const App: FunctionComponent= () => {
  return (
    <div>
      <h1>{appConfig.baseAppTitle}</h1>
      <MainWrapper />
    </div>
  );
};

export default App;

