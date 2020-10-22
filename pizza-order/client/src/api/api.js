export const productAPI = {
  getPizzaProduct() {
    return fetch('/product/pizzas').then((res) => res.json());
  },
 
  getPizzaProfile(id) {
    return fetch(`/product/pizzas/${id}`).then((res) => res.json())
  },

  getDrinkProduct() {
    return fetch('/product/drinks').then((res) => res.json());
  },

  getDrinkProfile(id) {
    return fetch(`/product/pizzas/${id}`).then((res) => res.json())
  },
};


export const authAPI = {
  
  async registration(loginData) {
      
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
      
    });
    const userData = await response.json();
    
    return userData;
  },

  async login(loginData) {
      debugger
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
      
    });
    
    const token = await response.json();
    debugger
    return token;
  },
  async me(storedJwt) {
    
    const response = await fetch('/me', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: storedJwt
      // credentials: 'include'
      
    });
    
    const userData = await response.json();
    
    return userData;
  }
};
