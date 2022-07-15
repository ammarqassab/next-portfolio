import axios from "axios";
import { apiurl, timeOut } from "./FormApi";

export const showAllProjectsApi = () => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.get('/showAllProjects');
    return responsee;
};

export const showProjectApi = (id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            'Accept': 'application/json',
        }

    });
    const responsee = service.get('/showProject/'+ id);
    return responsee;
};

export const addProjectApi = (token, data) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/AddProject',data);
    return responsee;
};

export const deleteProjectApi = (token, id) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/deleteProject/'+ id);
    return responsee;
};

export const editProjectApi = (token, id, data) => {
    const service = axios.create({
        baseURL:apiurl,
        timeout:timeOut,
        headers:{
            Authorization:`Bearer ${token}`
        }

    });
    const responsee = service.post('/dashboard/updateProject/'+ id, data);
    return responsee;
};