// import axios from 'axios'
// import { baseURL } from '../../config/globalConfig';
// import { generateDispatch } from '../../functions/otherFunctions';
// import { ADD_PRODUCT_CART, BUY_PRODUCTS_SUCCESS, GET_PRODUCTS_SUCCEES ,GET_PRODUCT_SUCCEES} from '../types/types';

// export const addProductCart =(product)=>{
//     return async(dispatch, getState) => {
//         let total=getState().Cart.total;
//         let allProducts=getState().Cart.selectedProducts;
//         let products=getState().Cart.selectedProducts.find((data)=>data.id===product.id);
//         if(product.stock>0){
//             if(!products){
//                 total=total+product.unit_price;
//                 console.log({...product,count:product.count+1,stock:product.stock-1})
//                 dispatch(generateDispatch(ADD_PRODUCT_CART,{total,products:{...product,count:product.count+1,stock:product.stock-1},is:false}))
//             }else{
//                 total=total+product.unit_price;
//                 products=allProducts;
//                 dispatch(generateDispatch(ADD_PRODUCT_CART,{total,products,is:true}))
//             }
//         }
//     }
// };


// export const deleteProductCart =(product)=>{
//     return async(dispatch, getState) => {
//         let total=getState().Cart.total;
//         let products=getState().Cart.selectedProducts;
//         if(products.length===0){
//             total=total+product.unit_price;
//             products=product;
//             dispatch(generateDispatch(ADD_PRODUCT_CART,{total,products}))
//         }
//         // if(action==='+'){
//         //     total=total+product.unit_price;
//         // }else{
//         //     total=total-product.unit_price;
//         // }
//         // dispatch(generateDispatch(GET_PRODUCTS_SUCCEES,productsBD));
//     }
// };


// export const buyProducts=()=>{
//     return async(dispatch) => {
//         const data=await axios.post(`${baseURL}buy`);
//         const response=data.data;
//         if(response.products){
//             dispatch(generateDispatch(BUY_PRODUCTS_SUCCESS));
//         }
//     }
// }