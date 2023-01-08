import { ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, DELETE_PRODUCT_CART,GET_PRODUCT_SUCCEES, GET_PRODUCTS_ATTEMPT, GET_PRODUCTS_SUCCEES, STATUS } from "../types/types";

const initialState = {
    getProducts: {
        status: STATUS.NONE,
        errors: {},
        products: [],
    },
    getProduct: {
        status: STATUS.NONE,
        errors: {},
        product: [],
    },
    newProducts: [],
    selectedProducts: [],
    total: 0,
    buyProducts: {
        errors: {},
        message: '',
        success: false
    }
}


export const productsReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_PRODUCTS_ATTEMPT:
            return newState;
        case GET_PRODUCTS_SUCCEES:
            newState.getProducts.products = action.payload;
            newState.getProducts.status = STATUS.SUCCESS;
            newState.getProducts.errors = {};
            return newState;
        case GET_PRODUCT_SUCCEES:
            newState.getProduct.product = action.payload;
            newState.getProduct.status = STATUS.SUCCESS;
            newState.getProduct.errors = {};
            return newState;
        case ADD_PRODUCT_CART:
            if (!action.payload.is) {
                newState.selectedProducts.push(action.payload.products)
                let prod=newState.getProducts.products.filter((data)=>data.id!==action.payload.products.id)
                prod=[...prod,action.payload.products]
                prod=prod.sort((a,b)=>{
                    if(a.id<b.id){
                        return -1
                    }else if(b.id>a.id){
                        return 1
                    }else{
                        return 0
                    }
                })
                newState.newProducts=prod
            } else {
                newState.selectedProducts = action.payload.products;
                newState.newProducts=action.payload.newProducts;
            }
            if(newState.getProduct.product.length!==0){
                let prodBD=newState.newProducts.find((data)=>data.id===newState.getProduct.product.id);
                newState.getProduct.product.stock=prodBD.stock;
                newState.getProduct.product.count=prodBD.count;
            }
            newState.total = action.payload.total;
            return newState;
        case DELETE_PRODUCT_CART:
            newState.selectedProducts = action.payload.products;
            newState.total = action.payload.total;
            return newState;
        case BUY_PRODUCTS_SUCCESS:
            newState.buyProducts.errors = {};
            newState.buyProducts.message = '';
            newState.buyProducts.success = true;
            newState.newProducts=[];
            action.payload.products.forEach(element => {
                let auxprod=newState.getProducts.products.find((data)=>data.id===element.id);
                newState.newProducts.push({...auxprod,stock:auxprod.stock-element.stock});
            });
            newState.newProducts=newState.newProducts.sort((a,b)=>{
                if(a.id<b.id){
                    return -1
                }else if(b.id>a.id){
                    return 1
                }else{
                    return 0
                }
            });
            return newState;
        default:
            return newState
    }
}