import * as login from './action-type';

let defaultState = {
    loading: false,
    payload: {},
};

export default function currentUser(state = defaultState , action = {}) {
    switch(action.type){
        case login.LOG_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload, loading: true});
        case login.LOG_ERR:
             return defaultState;
        case login.LOG_OUT:
            return defaultState;
        default :
            return defaultState;
    }
}
