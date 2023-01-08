import {  ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, DELETE_PRODUCT_CART, STATUS } from "../types/types";

const initialState  = {
    selectedProducts:[],
    total:0,
    buyProducts:{
        errors:{},
        message:'',
        success:false
    }
}


export const cartReducer = (state = initialState , action) => {
    let newState = {...state}
    switch(action.type){
        case ADD_PRODUCT_CART:
            if(!action.payload.is){
                newState.selectedProducts.push(action.payload.products)
            }else{
                newState.selectedProducts=action.payload.products;
            }
            newState.total=action.payload.total;
            return newState;
        case DELETE_PRODUCT_CART:
            newState.selectedProducts=action.payload.products;
            newState.total=action.payload.total;
            return newState;
        case BUY_PRODUCTS_SUCCESS:
            newState.buyProducts.errors={};
            newState.buyProducts.message='';
            newState.buyProducts.success=true;
            return newState
        default:
            return newState
    }
}