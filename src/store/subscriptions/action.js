import * as subscriptions from './action-type';

// export function subscriptionsIng(data) {
//     return {
//         type: subscriptions.GET_SUBSCRIPTION_LIST_ING,
//         payload: data
//     }
// }

export function subscriptionsSuccess(data) {
    return {
        type: subscriptions.GET_SUBSCRIPTION_LIST_SUCCESS,
        payload: data
    }
}


export function get_sub_list (){
    return dispatch=>{
        fetch('http://carhot.cn/api//subscriptions?format=json&page=1').then((res) => {
            return res.json();
        }).then((res) => {
            dispatch(subscriptionsSuccess(res.data))
        }).catch((error) =>{
            // dispatch(subscriptionsErr())
        })
    }
}


