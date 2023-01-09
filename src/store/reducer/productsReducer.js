import { ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, DELETE_PRODUCT_CART, GET_PRODUCT_SUCCEES, GET_PRODUCTS_ATTEMPT, GET_PRODUCTS_SUCCEES, STATUS, GET_PRODUCT_NONE } from "../types/types";

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
        case GET_PRODUCT_NONE:
            newState.getProduct.product = [];
            newState.getProduct.status = STATUS.NONE;
            newState.getProduct.errors = {};
            return newState;
        case ADD_PRODUCT_CART:
            if (!action.payload.is) {
                newState.selectedProducts.push(action.payload.products)
                let prod = []
                if(newState.newProducts.length===0){
                    prod=newState.getProducts.products.filter((data) => data.id !== action.payload.products.id)
                }else{
                    prod=newState.newProducts.filter((data) => data.id !== action.payload.products.id)
                }
                prod = [...prod, action.payload.products]
                prod = prod.sort((a, b) => {
                    if (a.id < b.id) {
                        return -1
                    } else if (b.id > a.id) {
                        return 1
                    } else {
                        return 0
                    }
                })
                newState.newProducts = prod;
                if (newState.getProduct.product.length !== 0) {
                    newState.getProduct.product.stock = action.payload.products.stock;
                    newState.getProduct.product.count = action.payload.products.count;
                }
            } else {
                newState.selectedProducts = action.payload.products;
                newState.newProducts = action.payload.newProducts;
                if (newState.getProduct.product.length !== 0) {
                    let prodBD = newState.newProducts.find((data) => data.id === action.payload.id);
                    newState.getProduct.product.stock = prodBD.stock;
                    newState.getProduct.product.count = prodBD.count;
                }
            }
            newState.total = action.payload.total;
            return newState;
        case DELETE_PRODUCT_CART:
            newState.selectedProducts = action.payload.selected;
            newState.total = action.payload.total;
            newState.newProducts=action.payload.products;
            if(newState.getProduct.product.length !== 0){
                let prodBD = action.payload.products.find((data) => data.id === action.payload.id);
                newState.getProduct.product.stock=prodBD.stock;
                newState.getProduct.product.count=prodBD.count;
            }
            return newState;
        case BUY_PRODUCTS_SUCCESS:
            newState.buyProducts.errors = {};
            newState.buyProducts.message = '';
            newState.buyProducts.success = true;
            newState.newProducts = action.payload.products;
            newState.total=0;
            newState.selectedProducts=[];
            if(newState.getProduct.product.length !== 0){
                let prodBD = action.payload.products.find((data) => data.name === newState.getProduct.product.name);
                newState.getProduct.product.stock=prodBD.stock;
                newState.getProduct.product.count=0;
            }
            return newState;
        default:
            return newState
    }
}