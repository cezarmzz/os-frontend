import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-cezar.herokuapp.com'
});

export default api;