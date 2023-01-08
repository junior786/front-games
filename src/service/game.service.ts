import { apiAxios } from "./interceptor";

export const gameService = () => {
   
    return apiAxios('/Game',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
        }
    }).catch(error => error.request.status === 403 ? window.location.href = '/login' : null);
} 