import { environment } from "../environments/environments.dev";
import { LoginRequest } from "../model/login.request";
import axios from 'axios';

export const loginService = (login: LoginRequest) => {
    return axios(`${environment.baseHref}/login `, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        data: login
    });
} 