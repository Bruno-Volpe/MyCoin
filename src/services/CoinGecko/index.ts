import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
};

const instance = axios.create(config);

export default instance;