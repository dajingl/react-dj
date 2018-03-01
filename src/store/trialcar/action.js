import * as trialcar from './action-type';

export function trialCarSuccess(data) {
    return {
        type: trialcar.GET_TRIAL_CAR_SUCCESS,
        payload: data
    }
}


export function get_trial_car (id){
    return dispatch=>{
        fetch('http://dj:3000/api/trial_cars/'+id+'/?format=json').then((res) => {
            return res.json();
        }).then((res) => {
            console.log(res)
            dispatch(trialCarSuccess(res))
        }).catch((error) =>{
        })
    }
}


