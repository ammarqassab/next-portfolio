import axios from "axios";

export const appName= 'Larect';
export const apiurl= 'http://shopingammar.c1.biz/api';
export const timeOut= 30000;

axios.defaults.baseURL = 'http://shopingammar.c1.biz/api'
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + ACCESS_TOKEN
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['content-type']='application/json'
axios.defaults.headers['withCredentials']=true
axios.defaults.headers['crossorigin']=true

//touch .nojekyll

//https://larect.000webhostapp.com/

//http://shopingammar.c1.biz/

// axios.defaults.validateStatus = () => {
//     return true;
//     };

// process.env.NEXT_PUBLIC_BACKEND_URL

// 'X-Requested-With': 'XMLHttpRequest'
//const csrf = () => axios.get('/sanctum/csrf-cookie')

// 'Accept': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",


//'Content-Type': 'multipart/form-data',

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

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
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard');
    return responsee;
};
