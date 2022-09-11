import './App.css';
import { LandingPage } from './components/LandingPage';
import {BrowserRouter,Route, Switch} from "react-router-dom"
import { Home } from './components/Home';
import CreatePokemon from './components/CreatePokemon';
import Detail from './components/Detail';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path ={"/"} component = {LandingPage}/>
        <Route exact path={"/home"} component = {Home}/>
        <Route exact path={"/pokemon"} component = {CreatePokemon}/>
        <Route exact path={"/Detail/:id"} component = {Detail}/>
        <Route path="*" component ={PageNotFound}/>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
