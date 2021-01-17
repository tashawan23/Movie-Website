
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Topmovies } from './pages/Topmovies'
import { Home } from './pages/Home'
import {  SearchMovies } from './pages/SearchMovies';

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/topmovies' exact component={Topmovies} />
          <Route path='/searchmovies' exact component={SearchMovies} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
