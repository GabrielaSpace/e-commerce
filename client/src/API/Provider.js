import axios from "axios";

const API_URL = "http://localhost:3000";

export const getProvider = (id) => {
    return axios
        .get(`${API_URL}/api/providers/${id}`)
        .then((response) => response.data);
};
