const COUNTER_ACTIONS={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT"
}

const COUNTER_InitialState = {
    value:0
}

const counterReducer = (state = COUNTER_InitialState, action) => {
    switch(action.type){
        case COUNTER_ACTIONS.INCREMENT:
            return{...state, value:state.value + 1}
        case COUNTER_ACTIONS.DECREMENT:
            return{...state, value:state.value - 1}

        default:
            return state
    }
}

export {counterReducer, COUNTER_ACTIONS}