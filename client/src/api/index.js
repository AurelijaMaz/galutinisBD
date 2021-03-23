const requestOptions = {
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  };
  
  const domain = 'http://localhost:5000';
  
  export const getAnimals = async (success, failure) => {
    
  }
  
  export const postAnimal = async (body, success, failure) => {
    
  }
  
  export const updateAnimal = async (id, body, success, failure) => {
    
  }
  
  export const deleteAnimal = async (id, success, failure) => {
    
  }
  
  const API = {
    getAnimals,
    postAnimal,
    updateAnimal,
    deleteAnimal
  };
  
  export default API;