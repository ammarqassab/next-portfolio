import axios from "axios";

export const appName= process.env.appName;
export const apiurl= process.env.apiUrl;
export const timeOut= 30000;

//touch .nojekyll

export const registeruserApi = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.post('/register',values);
    return responsee;
};

export const loginuserApi = (values) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.post('/login',values);
    return responsee;
};

export const logoutuserApi = (token) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/logout');
    return responsee;
};

//Middleware

export const Middleware = (token) => {

    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`,
        }

    });
    const responsee = service.post('/dashboard');
    return responsee;
};
