import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';

render(
  <React.StrictMode>
    <BrowserRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
