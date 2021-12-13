import * as api from './api.js';
import { getUserData } from '../util.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;
// up to here not project specific

// project specific funcs:

//getAll
export async function getAll() {
    return api.get('/data/memes?sortBy=_createdOn%20desc');
}

//create(item)
export async function create(item) {
    return api.post('/data/memes', item);
}

//getById(id)
export async function getById(id) {
    return api.get('/data/memes/' + id);
}
//deleteById(id)
export async function deleteById(id) {
    return api.del('/data/memes/' + id);
}

//edit(id, item)
export async function edit(id, item) {
    return api.put('/data/memes/' + id, item);
}

export async function getMyMemes(userId){
    
    return  await api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
    
}

//getByYear(query) - project specific
export async function getByName(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
};
