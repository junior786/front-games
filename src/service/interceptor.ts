import { environment } from './../environments/environments.dev';
import axios, { AxiosHeaders } from 'axios';
import Cookies from 'universal-cookie';

export const apiAxios = axios.create({
    baseURL: environment.baseHref
})

apiAxios.interceptors.request.use(request => {
        const cookies = new Cookies();
        const cookie = cookies.get('token');
        if (cookie) {
            (request?.headers as AxiosHeaders)?.set('Authorization', `Bearer ${cookie}`);
        }
        return request;
    });
