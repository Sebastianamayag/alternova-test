import axios from 'axios'
import { baseURL } from '../../config/globalConfig';
import { generateDispatch } from '../../functions/otherFunctions';
import { ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, DELETE_PRODUCT_CART, GET_PRODUCTS_SUCCEES ,GET_PRODUCT_NONE,GET_PRODUCT_SUCCEES} from '../types/types';

export const getAllItems =()=>{
    return async(dispatch, getState) => {
        const data=await axios.get(`${baseURL}all-products`);
        const productsBD=data.data.products;
        const newProducts = productsBD.reduce((acc,el)=>acc.concat({...el,["count"]:0}),[]);
        dispatch(generateDispatch(GET_PRODUCTS_SUCCEES,newProducts));
    }
};


export const getOneItem=(id)=>{
    return async(dispatch,getState) => {
        const data=await axios.get(`${baseURL}detail/${id}`);
        let productsBD=data.data;
        const product=getState().Products.newProducts.find((data)=>data.id===id);
        productsBD={...productsBD,'count':product?product.count:0,'stock':product?product.stock:productsBD.stock};
        dispatch(generateDispatch(GET_PRODUCT_SUCCEES,productsBD));
    }
}


export const getOneItemnone=()=>{
    return async(dispatch) => {
        dispatch(generateDispatch(GET_PRODUCT_NONE));
    }
}

export const addProductCart =(product)=>{
    return async(dispatch, getState) => {
        let total=getState().Products.total;
        let allProducts=getState().Products.selectedProducts;
        let products=getState().Products.selectedProducts.find((data)=>data.id===product.id);
        if(product.stock>0){
            if(!products){
                total=total+product.unit_price;
                dispatch(generateDispatch(ADD_PRODUCT_CART,{total,products:{...product,count:product.count+1,stock:product.stock-1},is:false}))
            }else{
                total=total+product.unit_price;
                let prodDif=allProducts.filter((data)=>data.id!==product.id);
                products={...products,stock:products.stock-1,count:products.count+1}
                prodDif=[...prodDif,products];
                let newProducts=getState().Products.newProducts.filter((data)=>data.id!==product.id);
                newProducts=[...newProducts,products];
                newProducts=newProducts.sort((a,b)=>{
                    if(a.id<b.id){
                        return -1
                    }else if(b.id>a.id){
                        return 1
                    }else{
                        return 0
                    }
                })
                dispatch(generateDispatch(ADD_PRODUCT_CART,{total,products:prodDif,is:true,newProducts,id:product.id}))
            }
        }
    }
};


export const deleteProductCart =(product)=>{
    return async(dispatch, getState) => {
        let total=getState().Products.total;
        let products=getState().Products.selectedProducts;
        let prod=products.find((data)=>data.id===product.id)
        if(products.length>0&&prod){
            let productsBD=getState().Products.newProducts.filter((data)=>data.id!==product.id);
            let newSelected=[];
            let newProducts=[...productsBD,{...product,stock:product.stock+1,count:product.count-1}];
            newProducts=newProducts.sort((a,b)=>{
                if(a.id<b.id){
                    return -1
                }else if(b.id>a.id){
                    return 1
                }else{
                    return 0
                }
            })
            newSelected=products.filter((data)=>data.id!==product.id);
            if(prod.count>1){
                newSelected=[...newSelected,{...product,stock:product.stock+1,count:product.count-1}];
            }
            total=total-product.unit_price;
            dispatch(generateDispatch(DELETE_PRODUCT_CART,{total,selected:newSelected,products:newProducts,id:product.id}))
        }
    }
};


export const buyProducts=()=>{
    return async(dispatch) => {
        const data=await axios.post(`${baseURL}buy`);
        const response=data.data;
        if(response.products){
            const newProducts = response.products.reduce((acc,el)=>acc.concat({...el,["count"]:0}),[]);
            dispatch(generateDispatch(BUY_PRODUCTS_SUCCESS,{products:newProducts}));
        }
    }
}