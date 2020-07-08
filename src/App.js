import React from 'react';
//import axios from 'axios'; // get axios
//import Movie from './components/Movie';
import Home from './routes/Home';
import About from './routes/About';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
import Todo from './routes/Todo';
import { createStore } from 'redux';
const initialState = {
  tasks: []
};

function addReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function resetReducer(state = initialState, action) {
  switch (action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([])
      };
    default:
      return state;
  }
}

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});

const store = createStore(addReducer);
store.dispatch(addTask('스토어 Study'));
console.log(store.getState());

store.replaceReducer(resetReducer);
console.log(store.getState());

const resetTask = () => ({
  type : 'RESET_TASK'
});

store.dispatch(resetTask());

store.dispatch(addTask('리듀서 Study'));
console.log(store.getState());


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
