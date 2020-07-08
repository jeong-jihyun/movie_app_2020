import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

const store = createStore(tasksReducer);
const initialState = {
  tasks: []
};
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        tasks: state.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function handleChange() {
  console.log(store.getState());
}

// eslint-disable-next-line no-unused-vars
const unsubscribe = store.subscribe(handleChange);
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
});
store.dispatch(addTask('스토어 Study'));
console.log(store.getState());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);