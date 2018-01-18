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
            return {...state, fetched: false}
            break;
        }
        case 'SUCCESS_PROJECTS_REQ': {
            return {...initState, fetched: true, data: action.payload}
            break;
        }
        case 'ERROR_PROJECTS_REQ': {
            return {...state, fetched: true, error: action.payload}
            break;
        }
        case 'START_PROJECTS_REMOVE': {
            return {...state, fetched: false}
            break;
        }
        case 'SUCCESS_PROJECTS_REMOVE': {
            return {...state, fetched: true}
            break;
        }
        case 'ERROR_PROJECTS_REMOVE': {
            return {...state, fetched: true, error: action.payload}
            break;
        }
        case 'START_PROJECTS_ADD': {
            return {...state, fetched: false}
            break;
        }
        case 'SUCCESS_PROJECTS_ADD': {
            return { ...initState,
              fetched: true,
              data: {
                items: state.data.items.concat([action.payload]),
                ...state.data
              }
            }
            break;
        }
        case 'ERROR_PROJECTS_ADD': {
            return {...state, fetched: true, error: action.payload}
            break;
        }
        case 'CHANGE_FORM': {
            console.log(action.payload); 
            return {...state}
            break;
        }
        //get data from state, filter object with given id from array, concat new array from fltered array and array with new object
    }

    return state;
}

export default projectReducer;
