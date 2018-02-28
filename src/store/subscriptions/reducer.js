import * as subscriptions from './action-type';

let defaultState = {
    payload: [],
    loding: false
};

export default function subList(state = defaultState , action = {}) {
    switch(action.type){
        case subscriptions.GET_SUBSCRIPTION_LIST_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload});
        case subscriptions.GET_SUBSCRIPTION_LIST_ERR:
             return Object.assign({}, ...state, {payload: action.payload});
        case subscriptions.GET_SUBSCRIPTION_LIST_ING:
            return Object.assign({}, ...state, {payload: action.payload});
        default :
            return defaultState;
    }
}
