import axios from 'axios';
const API_URL = 'http://localhost:3000/api/produtos';

export const getProdutos = async () =>{
    try {
        const response = await axios.get(API_URL);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar produtos: ', error);
        throw error;
    }
}