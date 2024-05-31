import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${baseURL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}
