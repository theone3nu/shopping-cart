const API_URL = "https://dummyjson.com/products";

export async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}