import axios from "axios";

const API_URL = "http://localhost:3000";

export const getProducts = () => {
    return axios
        .get(`${API_URL}/api/products`)
        .then((response) => response.data);
};