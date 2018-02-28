import * as login from './action-type';

//登入 异步

export function loginSuccess(data) {
    return {
        type: login.LOG_SUCCESS,
        payload: data
    }
}

export function loginding(data) {
    return {
        type: login.LOG_ING,
        payload: data
    }
}

export function loginErr(data) {
    return {
        type: login.LOG_ERR,
        payload: data
    }
}


export function log_in (obj){
    return dispatch=>{
        dispatch(loginding());
        if (obj.userName === 'dj' && obj.password === '123') {
            console.log('登录成功')
            dispatch(loginSuccess(...obj))
        } else {
            dispatch(loginErr({isLogin: false, info: '账号或密码错误'}))
        }
    }
}






//注销 同步
export function log_out (){
    return {
        type: login.LOG_OUT
    }
}

//异步状态需要使用中间件

