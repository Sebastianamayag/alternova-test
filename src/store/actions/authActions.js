import { generateDispatch } from "../../functions/otherFunctions";
import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_REGISTER_SUCCESS } from "../types/types";


export const createAccountSuccess = () => {
    return async (dispatch) => {
        dispatch(generateDispatch(AUTH_REGISTER_SUCCESS));
    }
}


export const loginAccountSuccess = () => {
    return async (dispatch) => {
        dispatch(generateDispatch(AUTH_LOGIN_SUCCESS));
    }
}

export const createAccountFailure = (error) => {
    return async (dispatch) => {
        dispatch(generateDispatch(AUTH_REGISTER_FAILURE,{error}));
    }
}


export const loginAccountFailure = (error) => {
    return async (dispatch) => {
        dispatch(generateDispatch(AUTH_LOGIN_FAILURE,{error}));
    }
}