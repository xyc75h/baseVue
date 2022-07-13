import {post} from '@/api/common'

export const login = (data) => {
    return post('/user/login', data);
};

export const register = (data) => {
    return post('/user/register', data);
}

