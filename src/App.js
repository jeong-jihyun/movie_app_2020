import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import About from './routes/About';
import Detail from './routes/Detail';
import Home from './routes/Home';
import Todo from './routes/Todo';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
        <Route path="/todo" component={Todo} />
      </HashRouter>
    );
  }
}

export default App;
