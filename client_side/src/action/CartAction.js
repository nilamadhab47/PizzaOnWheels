export const adddToCart = (pizza, quantity, varient) => (dispatch, getState) => {

    var cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: Number(quantity),
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity

    }

    if (cartItem.quantity > 10) {
        alert("you can't order more than 10 pizzas")
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "REMOVE_FROM_CART", payload: pizza })


        } else {

            dispatch({ type: 'ADD_TO_CART', payload: cartItem });
        }

    }


    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

}
export const deleteFromCart = (pizza) => (dispatch, getState) => {



    dispatch({ type: "REMOVE_FROM_CART", payload: pizza })
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

}