
const imgDir = "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg"

const initialState = {
    
    drinks: [
        {id: 1, drinkName: "CocaCola", img: imgDir, price: 20, volume: "0,5"},
        {id: 2, drinkName: "Pepsi", img: imgDir, price: 20, volume: "0,5"},
        {id: 3, drinkName: "Sprite", img: imgDir, price: 20, volume: "0,5"},
        
    ],

}

export const getPizza = (quantity) =>({type: GET_PIZZA, quantity})

export const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIZZA:
            return state;
                
        default:
            
            return state;
    }
}

export default drinkReducer;