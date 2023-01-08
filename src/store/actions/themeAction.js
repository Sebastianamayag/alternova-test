import { generateDispatch } from "../../functions/otherFunctions";
import { CHANGE_THEME_APP } from "../types/types";


export const changeTheme=(theme)=>{
    return async(dispatch) => {
        dispatch(generateDispatch(CHANGE_THEME_APP,theme));
    }
}