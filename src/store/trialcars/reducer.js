import * as trialcars from './action-type';

let defaultState = {
    payload: [],
    loding: false
};

export default function trialCars(state = defaultState , action = {}) {
    switch(action.type){
        case trialcars.GET_TRIAL_CARS_LIST_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload, loding: true});
        case trialcars.GET_TRIAL_CARS_LIST_ERR:
             return Object.assign({}, ...state, {payload: action.payload});
        case trialcars.GET_TRIAL_CARS_LIST_ING:
            return Object.assign({}, ...state, {payload: action.payload});
        default :
            return defaultState;
    }
}
