import axios from "axios";

export const getAllPizza = () => async (dispatch) => {
    
    dispatch({type : "GET_PIZZA_REQUEST"})

    try {
        const response = await axios.get('/api/pizzas/getallpizzas')
        console.log(response.data)
        dispatch({type : "GET_PIZZA_SUCCESS", payload: response.data})
    } catch (error) {
        dispatch({type : "GET_PIZZA_failed", payload: error})
       
        
    }
}
export const getPizzaById=(pizzaid)=>async dispatch=>{

    dispatch({type:'GET_PIZZABYID_REQUEST'})

    try {
        const response = await axios.post('/api/pizzas/getpizzabyid' , {pizzaid})
        console.log(response);
        dispatch({type:'GET_PIZZABYID_SUCCESS' , payload : response.data})
    } catch (error) {
        dispatch({type:'GET_PIZZABYID_FAILED' , payload : error})
    }

}
export const addPizza = (pizza) => async dispatch => {
    
    dispatch({type : "ADD_PIZZA_REQUEST"})

    try {
        const response = await axios.post('/api/pizzas/addpizza', {pizza})
        console.log(response.data)
        dispatch({type : "ADD_PIZZA_SUCCESS"})
    } catch (error) {
        dispatch({type : "ADD_PIZZA_FAILED", payload: error})
       
        
    }
}
export const deletePizza = (pizzaid) => async dispatch => {
    
    dispatch({type : "DELETE_PIZZA_REQUEST"})

    try {
        const response = await axios.post('/api/pizzas/deletepizza', {pizzaid})
        console.log(response)
        dispatch({type : "DELETE_PIZZA_SUCCESS"})
        window.location.reload()
    } catch (error) {
        dispatch({type : "DELETE_PIZZA_FAILED", payload: error})
       
        
    }
}
export const editPizza=(editedpizza)=>async dispatch=>{
    dispatch({type:'EDIT_PIZZA_REQUEST'})
    try {
        const response= await axios.post('/api/pizzas/editpizza' , {editedpizza})
        console.log(response);
        dispatch({type:'EDIT_PIZZA_SUCCESS'})
        window.location.href='/admin/pizzaslist'
    } catch (error) {
        dispatch({type:'EDIT_PIZZA_FAILED' , payload : error})
    }
}

export const filterPizza = (searchKey, category) => async (dispatch) => {
    
    dispatch({type : "GET_PIZZA_REQUEST"})

    try {
        var filteredPizza;
        const response = await axios.get('/api/pizzas/getallpizzas')
        filteredPizza = response.data.filter(pizza=>pizza.name.toLowerCase().includes(searchKey))

        if(category !== "all"){
         filteredPizza = response.data.filter(pizza=>pizza.category.toLowerCase()==category)
        }


        dispatch({type : "GET_PIZZA_SUCCESS", payload: filteredPizza})
    } catch (error) {
        dispatch({type : "GET_PIZZA_failed", payload: error})
       
        
    }
}