import axios from 'axios'
import {getItem, removeItem, setItem } from '../services/storage/storage.services';
import { useGlobalState } from '../../State/State';

const baseURL = import.meta.env.VITE_BASE_URL

const instance = new axios.create({
    baseURL: baseURL,
});

const onSuccess = (response) => {
    return response.data;
}

const onError = (err) => {
    const [isLogin, setIsLogin] = useGlobalState('isLogin');
    if(err.response.status === 401) {
        removeItem('token')
        window.location.pathname = '/Login'
        setItem("isLogin", false)
        setIsLogin(true)
        removeItem("token")
    }

    if (err.response.status >= 400 && err.response.status < 500) {
        alert("Client error: " + err.response.status)
    }

    return Promise.reject(err);
}

instance.interceptors.response.use(onSuccess, onError);
instance.interceptors.request.use((opt) => {
    const token = getItem("token");

    if (token) opt.headers.Authorization = "Bearer " + token;
    return opt;
})

export default instance