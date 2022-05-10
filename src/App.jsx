import { Redirect, Route, Switch } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail/CharacterDetail';
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
