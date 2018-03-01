import * as trialcars from './action-type';

export function trialCarsSuccess(data) {
    return {
        type: trialcars.GET_TRIAL_CARS_LIST_SUCCESS,
        payload: data
    }
}


export function get_trial_cars_list (){
    return dispatch=>{
        fetch('http://dj:3000/api/trial_cars?format=json&&page=1').then((res) => {
            return res.json();
        }).then((res) => {
            dispatch(trialCarsSuccess(res.data))
        }).catch((error) =>{
            // dispatch(subscriptionsErr())
        })
    }
}


