let pizzaData = {
    _data : [
        {id: 1, pizzaName: "Paperoni", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]},
        {id: 2, pizzaName: "Margarita", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]},
        {id: 3, pizzaName: "Diablo", img: "https://www.pizzaking.ua/resizer/resize/upload/catalog/e/e7c6ce8e7bffbd7fc86a4c119262da24-472-472-c.jpg", price: 120, composition: ["томатный соус", "сыр Моцарелла", "базилик"]}
    ],
    getAllPizza(){
        return this._data;
    },
    
    getpizzaById(id){
        let el;
        this._data.forEach(element => {
            if (element.id == id) {
                el = element;
            }
        });
        return el;
    }
}
module.exports = pizzaData;