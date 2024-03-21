import axios from 'axios';

axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default axios;
