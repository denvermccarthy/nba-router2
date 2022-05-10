import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
import { useCharacters } from './context/CharacterContext';
import { fetchCharacters } from './utils/characters';
import Home from './views/Home/Home';

export default function App() {
  return (
    <>
      <h1>Rick And Morty</h1>

      <Switch>
        <Route path={`/home/:id`}>
          <CharacterDetail />
        </Route>
        <Route path={'/home'}>
          <Home />
        </Route>
        <Route path={'/'}>
          <Redirect to={'/home'} />
        </Route>
      </Switch>
    </>
  );
}
