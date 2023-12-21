const NAME_ACTIONS={
    CHANGE:"CHANGE"
}

const NAME_InitialState = {
    name:"Anthony"
}

const nameReducer = (state = NAME_InitialState, action) => {
    switch(action.type){

        case NAME_ACTIONS.CHANGE:
            return{...state, name:action.payload}
        
        default:
            return state
    }
}

export {NAME_ACTIONS, nameReducer}