export const productAPI = {
  getPizzaProduct() {
    return fetch('/pizzas').then((res) => res.json());
  },
 
  getPizzaProfile(id) {
    
    return fetch(`/pizzas/${id}`).then((res) => res.json())
      
  },

  getDrinkProduct() {
    return fetch('/drinks').then((res) => res.json());
  },
};


export const authAPI = {
  
  async login(loginData) {
      
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData.loginData)
      
    });
    const userData = await response.json();
    
    return userData;
  }
};
