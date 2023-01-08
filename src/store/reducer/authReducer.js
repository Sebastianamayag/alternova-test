import { AUTH_LOGIN_SUCCESS, AUTH_REGISTER_SUCCESS, STATUS } from "../types/types";

const initialState = {
    auth: false
}


export const authReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case AUTH_REGISTER_SUCCESS:
            newState.auth = true;
            return newState;
        case AUTH_LOGIN_SUCCESS:
            newState.auth = true;
            return newState;
        default:
            return newState
    }
}