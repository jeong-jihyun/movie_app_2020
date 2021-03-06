import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { logger } from 'redux-logger';
import tasksReducer from '../reducers/tasks';

export default function createStore(history) {
    return reduxCreateStore(
        combineReducers({
            tasks: tasksReducer,
            router: routerReducer
        }),
        applyMiddleware(
            logger,
            routerMiddleware(history)
        )
    );
}