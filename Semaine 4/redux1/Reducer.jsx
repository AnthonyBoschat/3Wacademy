const initialState = {
    firstname:"Anthony",
    lastname:"Boschat",
    age:29,
}

const ACTIONS_PROFIL = {
    UPDATE_FIRSTNAME:"UPDATE_FIRSTNAME",
    UPDATE_LASTNAME:"UPDATE_LASTNAME",
    UPDATE_AGE:"UPDATE_AGE",
}

const profilReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTIONS_PROFIL.UPDATE_FIRSTNAME:
            return {...state, firstname:action.payload}
        case ACTIONS_PROFIL.UPDATE_LASTNAME:
            return {...state, lastname:action.payload}
        case ACTIONS_PROFIL.UPDATE_AGE:
            return {...state, age:action.payload}
        default:
            return state
    }
}

export default profilReducer