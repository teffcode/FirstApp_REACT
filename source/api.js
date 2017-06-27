import fetch from 'isomorphic-fetch';
// fetch -> FORMA DE REALIZAR PETICIONES HTTP, sustituye AJAX, funciona con promesas

// esta URL es de la página http://jsonplaceholder.typicode.com/
const baseUrl = 'http://jsonplaceholder.typicode.com';

const api = {
    post:{
       async getList(page = 1){
           const response = await fetch(`${baseUrl}/posts?_page=${page}`);
           const data = await response.json();
           return data;
       },
       async getSingle(id = 1){
           const response = await fetch(`${baseUrl}/posts/${id}`);
           const data = await response.json();
           return data;
       },
       async getComment(id = 1){
           const response = await fetch(`${baseUrl}/posts/${id}/comments`);
           const data = await response.json();
           return data;
       },
    },
    users: {
        async getSingle(id = 1){
           const response = await fetch(`${baseUrl}/users/${id}`);
           const data = await response.json();
           return data;
       },
    },
};

export default api;