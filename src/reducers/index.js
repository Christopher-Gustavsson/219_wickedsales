import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from "./user_reducer";
import productsReducer from './products_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    products: productsReducer,
    user: userReducer
});

export default rootReducer;














// const state ={
//     user: {
//         auth: false,
//         username: "Steve"
//     },
//     products: {
//         list: [],
//         productDetails: {}
//     },
//     cart: {
//         totalItems: 4,
//         totalCost: 8900,
//         items: []
//     }
// }

