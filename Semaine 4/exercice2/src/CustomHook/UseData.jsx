import { useReducer } from "react"

const UseData = () => {

    // Les actions possibles
    const DATA_ACTIONS = {
        UPDATE_FIRSTNAME:"UPDATE_FIRSTNAME",
        UPDATE_LASTNAME:"UPDATE_LASTNAME",
        UPDATE_EMAIL:"UPDATE_EMAIL",
        UPDATE_COUNTRY:"UPDATE_COUNTRY",
        UPDATE_PAYS:"UPDATE_PAYS",
        UPDATE_POLITICS:"UPDATE_POLITICS",
        UPDATE_USERNAME:"UPDATE_USERNAME",
        UPDATE_PASSWORD1:"UPDATE_PASSWORD1",
        UPDATE_PASSWORD2:"UPDATE_PASSWORD2",
    }

    // Le state initial
    const initialData = {
        firstName : "",
        lastName : "",
        email : "",
        userName : "",
        password1 : "",
        password2 : "",
        accept: false,
        adress : {
            country : "",
            pays: "",
        },
        account: {
            userName: "",
            password: ""
        }
    }

    // Le reducer pour modifier le state
    const reducerData = (state, action) => {
        switch(action.type){
            case DATA_ACTIONS.UPDATE_FIRSTNAME:
                return {...state, firstName:action.payload}
            case DATA_ACTIONS.UPDATE_LASTNAME:
                return {...state, lastName:action.payload}
            case DATA_ACTIONS.UPDATE_EMAIL:
                return {...state, email:action.payload}
            case DATA_ACTIONS.UPDATE_COUNTRY:
                return {...state, adress: {...state.adress, country: action.payload}}
            case DATA_ACTIONS.UPDATE_PAYS:
                return {...state, adress: {...state.adress, pays: action.payload}}
            case DATA_ACTIONS.UPDATE_POLITICS:
                return {...state, accept:!state.accept}
            case DATA_ACTIONS.UPDATE_USERNAME:
                return {...state, userName:action.payload}
            case DATA_ACTIONS.UPDATE_PASSWORD1:
                return {...state, password1:action.payload}
            case DATA_ACTIONS.UPDATE_PASSWORD2:
                return {...state, password2:action.payload}
        }
    }

    // Creation du dispatch
    const [data, dispatchData] = useReducer(reducerData, initialData)

    return{
        DATA_ACTIONS,
        data,
        dispatchData,
    }
}

export default UseData