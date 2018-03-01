import * as subscriptions from './action-type';

let defaultState = {
    payload: {},
    loading: false
};

export default function subList(state = defaultState , action = {}) {
    switch(action.type){
        case subscriptions.GET_SUBSCRIPTION_LIST_SUCCESS:
            return Object.assign({}, ...state, {payload: action.payload, loading: true});
        case subscriptions.GET_SUBSCRIPTION_LIST_ERR:
             return Object.assign({}, ...state, {payload: action.payload});
        default :
            return defaultState;
    }
}
