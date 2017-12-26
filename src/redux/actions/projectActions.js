export function reqStart(){
    return {
        type: 'START_PROJECTS_REQ',
    }
}

export function reqSuccess(projects){
    return {
        type: 'SUCCESS_PROJECTS_REQ',
        payload: projects,
    }
}

export function reqError(err){
    return {
        type: 'ERROR_PROJECTS_REQ',
        payload: err
    }
}

export function fetchList(url){
    return (dispatch) => {
        // const reqHeaders = new Headers();
        // reqHeaders.append('Accept', 'application/json');

        const init = {
            method: 'GET',
            // headers: reqHeaders,
            mode: 'cors',
        };


        dispatch(reqStart())
        return fetch(url, init)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            dispatch(reqSuccess(json))
        })
        .catch((err) => {
            console.log(err)
            dispatch(reqError(err))
        })
    }
}
