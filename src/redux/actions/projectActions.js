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

export function reqStartDetail(){
    return {
        type: 'START_PROJECTS_REQ_DETAIL',
    }
}

export function reqSuccessDetail(project){
    return {
        type: 'SUCCESS_PROJECTS_REQ_DETAIL',
        payload: project,
    }
}

export function reqError(err){
    return {
        type: 'ERROR_PROJECTS_REQ',
        payload: err,
    }
}

export function reqErrorDetail(err){
    return {
        type: 'ERROR_PROJECTS_REQ_DETAIL',
        payload: err,
    }
}

export function removeStart(){
    return {
        type: 'START_PROJECTS_REMOVE',
    }
}

export function removeSuccess(id){
    return {
        type: 'SUCCESS_PROJECTS_REMOVE',
        payload: {
          project: id,
        }
    }
}

export function removeError(err){
    return {
        type: 'ERROR_PROJECTS_REMOVE',
        payload: err,
    }
}

export function addStart(){
    return {
        type: 'START_PROJECTS_ADD',
    }
}

export function addSuccess(project){
    return {
        type: 'SUCCESS_PROJECTS_ADD',
        payload: project,
    }
}

export function addError(err){
    return {
        type: 'ERROR_PROJECTS_ADD',
        payload: err,
    }
}

export function editStart(){
    return {
        type: 'START_PROJECTS_EDIT',
    }
}

export function editSuccess(newProject){
    return {
        type: 'SUCCESS_PROJECTS_EDIT',
        payload: {
            project: newProject,
        },
    }
}

export function editError(err){
    return {
        type: 'ERROR_PROJECTS_EDIT',
        payload: err,
    }
}

//TODO: Refactor this name
export function fetchList(url){
    return (dispatch) => {
        const reqHeaders = new Headers();
        reqHeaders.append('Accept', 'application/json');

        const init = {
            method: 'GET',
            headers: reqHeaders,
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

export function fetchDetail(url){
    return (dispatch) => {
        const reqHeaders = new Headers();
        reqHeaders.append('Accept', 'application/json');

        const init = {
            method: 'GET',
            headers: reqHeaders,
            mode: 'cors',
        };

        dispatch(reqStartDetail())

        return fetch(url, init)
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            dispatch(reqSuccessDetail(json))
        })
        .catch((err) => {
            console.log(err)
            dispatch(reqErrorDetail(err))
        })
    }
}

export function remove(url, id){
  return (dispatch) => {
    const reqHeaders = new Headers();
    reqHeaders.append('Accept', 'application/json');

    const init = {
      method: 'DELETE',
      headers: reqHeaders,
      mode: 'cors',
    }

    dispatch(removeStart())

    return fetch(url, init)
    .then((res) => {
      return new Promise((resolve, reject)=> {
        if(!res.status >= 200 && !res.status < 300){
          return reject(res.json())
        }
        resolve()
      })
    })
    .then((json) => {
        dispatch(removeSuccess(id))
    })
    .catch((err) => {
        console.log(err)
        dispatch(removeError(err))
    })

  }
}

export function add(url, project){
  return (dispatch) => {
    let reqHeaders = new Headers();
    reqHeaders.append('Accept', 'application/json');
    reqHeaders.append('Content-Type', 'application/json');

    const init = {
      method: 'POST',
      headers: reqHeaders,
      mode: 'cors',
      body: JSON.stringify(project),
    }

    dispatch(addStart())

    return fetch(url, init)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        dispatch(addSuccess(json))
    })
    .catch((err) => {
        console.log(err)
        dispatch(addError(err))
    })

  }
}

export function edit(url, project){
  return (dispatch) => {
    let reqHeaders = new Headers();
    reqHeaders.append('Accept', 'application/json');
    reqHeaders.append('Content-Type', 'application/json');

    const init = {
      method: 'PUT',
      headers: reqHeaders,
      mode: 'cors',
      body: JSON.stringify(project),
    }

    dispatch(editStart())

    return fetch(url, init)
    .then((res) => {
        return res.json()
    })
    .then((json) => {
        dispatch(editSuccess(json))
    })
    .catch((err) => {
        console.log(err)
        dispatch(editError(err))
    })

  }
}
