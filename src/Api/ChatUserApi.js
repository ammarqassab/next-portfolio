import axios from "axios";
import { apiurl, timeOut } from "./FormApi";

axios.defaults.headers['Access-Control-Allow-Origin']='*'
axios.defaults.headers['Access-Control-Request']='*'
axios.defaults.headers['Access-Control-Allow-Methods']='GET, PUT, POST, DELETE, OPTIONS'
axios.defaults.headers['Access-Control-Allow-Headers']='Access-Control-Allow-Headers: Content-Type, X-Auth-Token, Origin, Authorization, X-Requested-With'

export const allMessageApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.post('/allMssageConvID/'+ id);
    return responsee;
};

export const sentMessageApi = (token, values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/sentMessage',values);
    return responsee;
};

export const markAsReadApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.post('/markAsRead/'+ id);
    return responsee;
};

export const unreadApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.get('/unread/'+ id);
    return responsee;
};

export const shoWAllConvApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    const responsee = service.get('/dashboard/shoWAllConv');
    return responsee;
};
