const initState = {
    data: [],
    error: false,
    fetched: false,
    updated: false,
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
          console.log(action.payload);
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
          const newItems = state.data.items.filter((project) => {
            return project._id != action.payload.project;
          });

          console.log('after remove',newItems);

            return {...state,
              fetched: true,
              data: {
                items: newItems,
                _links: state.data._links,
                pagination: state.data.pagination,
              }
            }
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
          const newItems = state.data.items.concat([action.payload]);
          console.log(newItems);

            return { ...initState,
              fetched: true,
              data: {
                items: newItems,
                _links: state.data._links,
                pagination: state.data.pagination,
              }
            }
            break;
        }
        case 'ERROR_PROJECTS_ADD': {
            return {...state, fetched: true, error: action.payload}
            break;
        }
        case 'START_PROJECTS_ADD': {
            return {...state, fetched: false, updated: false}
            break;
        }
        case 'SUCCESS_PROJECTS_EDIT': {
          const newItems = state.data.items.map((project) => {
            if(project._id == action.payload.project._id){
              return action.payload.project
            } else {
              return project;
            }
          })

            return {...initState,
              fetched: true,
              updated: true,
              data: {
                items: newItems,
                _links: state.data._links,
                pagination: state.data.pagination,
              }
            }
            break;
        }
        case 'ERROR_PROJECTS_ADD': {
            return {...state,
              fetched: true,
              updated: false,
              error: action.payload,
            }
            break;
        }
    }

    return state;
}

export default projectReducer;
