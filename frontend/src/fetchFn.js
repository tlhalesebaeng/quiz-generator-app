import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASEURL,
    validateStatus: () => {
        return true;
    },
});

export default api;
