import * as trialcar from './action-type';

let defaultState = {
    payload: [],
    loading: false
};

export default function trialCar(state = defaultState , action = {}) {
    console.log(action)
    switch(action.type){
        case trialcar.GET_TRIAL_CAR_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload, loading: true});
        case trialcar.GET_TRIAL_CAR_ERR:
             return Object.assign({}, ...state, {payload: action.payload});
        case trialcar.GET_TRIAL_CAR_ING:
            return Object.assign({}, ...state, {payload: action.payload});
        default :
            return defaultState;
    }
}
