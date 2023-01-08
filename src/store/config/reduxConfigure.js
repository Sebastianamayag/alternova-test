import { combineReducers } from 'redux'
import { authReducer } from '../reducer/authReducer';
import { cartReducer } from '../reducer/cartReducer';
import { productsReducer } from '../reducer/productsReducer';
import { themeReducer } from '../reducer/themeReducer';
const ReduxConfigure = combineReducers({
    Products: productsReducer,
    // Cart:cartReducer,
    Theme:themeReducer,
    Auth:authReducer
});

export default ReduxConfigure;