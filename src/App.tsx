import React, { FunctionComponent, Suspense } from 'react';
import { Router } from '@reach/router';
import Artists from './components/Artists';
import Artist from './components/Artist';
import { createGlobalStyle } from 'styled-components';
import Spinner from './components/Spinner';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    background: #BFB5AF;
  }
`

const App: FunctionComponent<{}> = () => (
  <>
    <GlobalStyle />
    <Suspense fallback={<Spinner />}>
      <Router>
        <Artists path="/" />
        <Artist path="/:name" />
      </Router>
    </Suspense>
  </>
);

export default App;