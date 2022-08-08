export const cartReducer = (state={cartItems:  []}, action) => {
    switch (action.type) {
        case "ADD_TO_CART":

        const alreadyAdded = state.cartItems.find(items=> items._id===action.payload._id);

        if(alreadyAdded){
            return {
                ...state,
                cartItems : state.cartItems.map(items => items._id===action.payload._id ? action.payload : items)
            }
        }
        else {
            return {
                ...state,
                cartItems : [...state.cartItems , action.payload]
            }
            
        }

        case "REMOVE_FROM_CART" : return {

            ...state,
            cartItems : state.cartItems.filter(items => items._id !== action.payload._id)
        }

        
           
    
        default:
           return state
    }
}