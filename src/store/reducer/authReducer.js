import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_REGISTER_SUCCESS, STATUS } from "../types/types";

const initialState = {
    auth: false,
    message:''
}


export const authReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case AUTH_REGISTER_SUCCESS:
            newState.auth = true;
            newState.message='';
            return newState;
        case AUTH_LOGIN_SUCCESS:
            newState.auth = true;
            newState.message='';
            return newState;
        case AUTH_REGISTER_FAILURE:
            newState.auth = false;
            newState.message=action.payload.error;
            return newState;
        case AUTH_LOGIN_FAILURE:
            newState.auth = false;
            newState.message=action.payload.error;
            return newState;
        default:
            return newState
    }
}