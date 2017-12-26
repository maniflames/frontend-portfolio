const initState = {
    data: [],
    error: false,
    fetched: false,
}

//NOTE: I tried to avoid the switch but this object doesn't return functions in the way I had intended
// projectsActions[action.type](state);
// found out I have to return a function
// process sometimes states I return an undefined value
//
//TODO: Switch statement refactor

const projectReducer = (state=initState, action={type: 'default'}) => {
    switch (action.type) {
        case 'START_PROJECTS_REQ': {
            return {...initState, fetched: false} //rturning initState cuz otherwise errors get cached
            break;
        }
        case 'SUCCESS_PROJECTS_REQ': {
            return {...state, fetched: true, data: action.payload}
            break;
        }
        case 'ERROR_PROJECTS_REQ': {
            return {...state, fetched: true, error: action.payload}
        }
    }

    return state;
}

export default projectReducer;
