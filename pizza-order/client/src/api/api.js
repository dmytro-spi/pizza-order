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
      
    await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
      
    });
    // const userData = await response.json();
    
    // return userData;
  },

  async login(loginData) {
    
    await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData),
      credentials: 'include'      
    });
    
  },

  async logout(login) {
   debugger
    await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({email:login}),
      credentials: 'include'      
    });
    
  },

  async me() {
    
    const response = await fetch('http://localhost:3000/me', {
      
      credentials: 'include'
      
    });
    
    const userData = await response.json();
    
    return userData;
  }
};
