import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;
// up to here not project specific

// project specific funcs:

//getAll
export async function getAll() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

//create(item)
export async function create(item) {
    return api.post('/data/albums', item);
}

//getById(id)
export async function getById(id) {
    return api.get('/data/albums/' + id);
}
//deleteById(id)
export async function deleteById(id) {
    return api.del('/data/albums/' + id);
}

//edit(id, item)
export async function edit(id, item) {
    return api.put('/data/albums/' + id, item);
}

//getByYear(query) - project specific
export async function getByName(query) {
    return api.get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
};
