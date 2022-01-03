import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import All from './components/All';
import BurgerMenu from './components/BurgerMenu';
import ByName from './components/ByName';
import Home from './components/Home';
import './styles/Home.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <BurgerMenu />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Router path='/nombre' children={<ByName />} />
          <Router path='/todos' children={<All />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
