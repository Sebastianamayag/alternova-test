import { combineReducers } from 'redux'
import { authReducer } from '../reducer/authReducer';
import { productsReducer } from '../reducer/productsReducer';
import { themeReducer } from '../reducer/themeReducer';
const ReduxConfigure = combineReducers({
    Products: productsReducer,
    Theme:themeReducer,
    Auth:authReducer
});

export default ReduxConfigure;