import React from 'react'
import { Header } from './components/Header/Header';
import { Router } from './route/Router'
import { createGlobalStyle } from 'styled-components';


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
    <div>
      <GlobalStyle />
      <Header />
      <Router />

    </div>
  );
}

export default App;
