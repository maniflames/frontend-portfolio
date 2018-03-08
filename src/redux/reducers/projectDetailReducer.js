const initState = {
    data: {},
    error: false,
    fetched: false,
}

const projectDetailReducer = (state=initState, action={ type: 'DEFAULT' } ) => {
  switch (action.type) {
    case 'START_PROJECTS_REQ_DETAIL': {
        return {...state, fetched: false}
        break;
    }
    case 'SUCCESS_PROJECTS_REQ_DETAIL': {
        return {...state, fetched: true, data: action.payload }
        break;
    }
    case 'ERROR_PROJECTS_REQ_DETAIL': {
        return {...state, fetched: true, error: true, data: action.payload }
        break;
    }
  }

  return state

}

export default projectDetailReducer;
