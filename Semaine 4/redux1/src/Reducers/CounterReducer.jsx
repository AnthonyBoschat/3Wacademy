const COUNTER_ACTION = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
  };
  
// Définissez l'état initial de votre compteur
const counterInitialState = {
value: 0,
};

// Définissez votre reducer pour gérer les actions
const counterReducer = (state = counterInitialState, action) => {
switch (action.type) {
    case COUNTER_ACTION.INCREMENT:
    return { ...state, value: state.value + 1 };
    case COUNTER_ACTION.DECREMENT:
    return { ...state, value: state.value - 1 };
    default:
    return state;
}
};

export { counterReducer, COUNTER_ACTION };