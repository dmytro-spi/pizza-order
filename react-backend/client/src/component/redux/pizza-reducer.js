const GET_PIZZA = "GET_PIZZA";

const imgDir = "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg"

const initialState = {
    pizza: [
        {id: 1, pizzaName: "Paperoni", img: imgDir, price: 120},
        {id: 2, pizzaName: "Margarita", img: imgDir, price: 120},
        {id: 3, pizzaName: "Diablo", img: imgDir, price: 120}
    ]
}

export const getPizza = (quantity) =>({type: GET_PIZZA, quantity})

export const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIZZA:
            return state;
                
        default:
            
            return state;
    }
}

export default pizzaReducer;