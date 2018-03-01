import * as login from './action-type';

//登入 异步

export function loginSuccess(data) {
    return {
        type: login.LOG_SUCCESS,
        payload: data
    }
}

export function loginErr(data) {
    return {
        type: login.LOG_ERR,
        payload: data
    }
}


export function log_in (phone,code){
    return dispatch=>{
        fetch(`http://dj:3000/api/consumer?phone=${phone}&code=${code}`, {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }}).then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res)
            dispatch(loginSuccess(res))
        }).catch((error) =>{
            // dispatch(loginErr())
        })
    }
}






//注销 同步
export function log_out (){
    return {
        type: login.LOG_OUT
    }
}

//异步状态需要使用中间件

