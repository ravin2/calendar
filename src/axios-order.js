import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.altof.io:5001/',
    headers: {
      'Content-Type': 'application/json',      
    },
});

export default instance;