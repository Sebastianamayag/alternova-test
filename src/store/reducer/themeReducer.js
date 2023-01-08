import { Theme } from '@react-navigation/native';
import {  ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, CHANGE_THEME_APP, DELETE_PRODUCT_CART, STATUS } from "../types/types";


const initialState = {
    dark: false,
    colors: {
        primary: '#e61f6e',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'gray',
    },
    secondary:'white',
    switch:'#e61f6e'
}

const darkTheme = {
    dark: true,
    colors: {
        primary: 'white',
        background: 'black',
        card: 'black',
        text: '#f36da8',
        border: 'white',
        notification: 'gray',
    },
    secondary:'#e61f6e',
    switch:'#f36da8'
}

export const themeReducer = (state = initialState , action) => {
    switch(action.type){
        case CHANGE_THEME_APP:
            if(action.payload==='light'){
                return {...initialState}
            }else{
                return {...darkTheme}
            }
        default:
            return {...state}
    }
}