import axios from 'axios';
import { auth } from '../firebaseConfig'; // Importa `auth` desde tu configuración de Firebase

// URL base de tus funciones de Firebase. Asegúrate de cambiar REGION y PROJECT_ID a los valores de tu proyecto.
const BASE_URL = import.meta.env.VITE_BASE_URL;

// Función para obtener todas las ventas del día desde la API
export const getSalesFromFirestore = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getDailySales`);
        return response.data; 
    } catch (error) {
        console.error('Error fetching sales:', error);
        throw error;
    }
};

// Función para añadir una nueva venta a través de la API
export const addSaleToFirestore = async (sale) => {
    try {
        console.log(sale);
        const response = await axios.post(`${BASE_URL}/addSale`, sale );
        return response.data; 
    } catch (error) {
        console.error('Error adding sale:', error);
        throw error;
    }
};
// Función para añadir una nueva venta a través de la API
export const completeSale = async (saleId) => {
    try {
        const saleUpdates = { status: "Pagado" };
        const response = await axios.patch(`${BASE_URL}/updateSale?id=${saleId}`, saleUpdates, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data; 
    } catch (error) {
        console.error('Error updating sale:', error);
        throw error;
    }
};

// Función para obtener todos los clientes a través de la API
export const getAllClients = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllClients`);
        return response.data;
    } catch (error) {
        console.error('Error getting products', error);
        throw error;
    }
};

// Función para obtener todos los productos a través de la API
export const getAllProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getAllProducts`);
        return response.data;
    } catch (error) {
        console.error('Error getting products', error);
        throw error;
    }
};

// Función para obtener todos los productos a través de la API
export const getTopSellingProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getTopSellingProducts`);
        return response.data;
    } catch (error) {
        console.error('Error getting products', error);
        throw error;
    }
};

// Función para obtener la caja del dia a través de la API
export const getTodayCaja = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/getCaja`);
        return response.data;
    } catch (error) {
        console.error('Error getting caja', error);
        throw error;
    }
};

