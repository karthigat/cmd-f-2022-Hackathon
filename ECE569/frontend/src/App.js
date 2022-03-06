import logo from './logo.svg';
import './App.css';

import {Home} from './Home'
import {Food} from './get_recipes'
import {Recipe} from './get_recipes'
import {Navigation} from './Navigation'

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
        Food App
        
        </h3>

       <Navigation/>

       <Switch>
         <Route path='/' component={Home} exact/>
         <Route path='/food' component={Food}/>
         <Route path='/get_recipes' component={Recipe}/>
       </Switch>

      </div>
      </BrowserRouter>
  );
}

export default App;
