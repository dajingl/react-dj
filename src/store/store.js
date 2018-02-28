import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import currentUser from './login/reducer';
import subList from './subscriptions/reducer';
import trialCars from './trialcars/reducer';
import trialCar from './trialcar/reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({currentUser, subList, trialCars,
    trialCar});

let store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))

export default store;