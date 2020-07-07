import React from 'react';
//import axios from 'axios'; // get axios
//import Movie from './components/Movie';
import Home from './routes/Home';
import About from './routes/About';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navigation/>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail}/>
      </HashRouter>
    );
  }
}

export default App;
