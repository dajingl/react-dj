export function  get(url,params){
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    fetch(url,{
        method: 'GET',
    })
        .then((response) => response.json())
        .then((json) => {
           return json.data
        })
        .catch((error) => {
            alert(error)
        })
}