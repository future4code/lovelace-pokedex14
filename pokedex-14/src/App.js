import React from 'react'
import { Header } from './components/Header/Header';
import { Router } from './route/Router'
import { createGlobalStyle } from 'styled-components';
import { GlobalState } from './global/GlobalState';


function App() {

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  /* Outros estilos globais */
`;
  return (
    <GlobalState>
      <GlobalStyle />
      <Header />
      <Router />

    </GlobalState>
  );
}

export default App;
