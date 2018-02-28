import * as login from './action-type';

let defaultState = {
    isLogin: false,
    unameHelp: "",
    upwdHelp: "",
    remember: false,
    info: ""
};

export default function currentUser(state = defaultState , action = {}) {
    switch(action.type){
        case login.LOG_SUCCESS:
            return Object.assign({}, ...state, action.payload);
        case login.LOG_ERR:
             return Object.assign({}, ...state, action.payload);
        case login.LOG_ING:
            return Object.assign({}, ...state,  action.payload);
        case login.LOG_OUT:
            return defaultState;
        default :
            return defaultState;
    }
}
