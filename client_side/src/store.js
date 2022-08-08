import {combineReducers} from "redux";

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk"

import { composeWithDevTools } from '@redux-devtools/extension';
import {addPizzaReducer, editPizzaReducer, getAllPizzaReducer, getPizzaByIdReducer} from "./reducers/pizzaReducers"
import { cartReducer } from "./reducers/CartReducer";
import { getAllUsersReducer, loginUserReducer ,registerUserReducer } from "./reducers/UserReducer";
import { getAllOrdersReducer, getUserOrdersReducer, placeOrderReducer } from "./reducers/OrderReducer";








const finalReducer = combineReducers({
    getAllPizzaReducer : getAllPizzaReducer,
    cartReducer : cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllUsersReducer: getAllUsersReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    

    
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null
const intialState = {
    cartReducer : {
        cartItems : cartItems,
    },

    loginUserReducer :{
        currentUser : currentUser
    }
};

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer , intialState , composeEnhancers(applyMiddleware(thunk)))

export default store