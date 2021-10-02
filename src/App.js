import { Route, Switch } from 'react-router';
import './App.css';
import Character from './Components/Character';
import CharactersLists from './Components/CharactersLists';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty API </h1>
      <Switch>
        <Route strict exact path="/" component={CharactersLists} />
        <Route strict exact path="/search" component={Search} />
        <Route strict exact path="/:id" component={Character} />
      </Switch>
    </div>
  );
}

export default App;
