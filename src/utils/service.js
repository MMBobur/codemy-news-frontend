import http from "./httpConf"

const getAll = (url) => {
    return http.get(url);
};


const getOne = (url, id) => {
    return http.get(`${url}/${id}`);
};

const getToken = () => {
    return localStorage.getItem("token");
};

const crud = {
    getAll,
    getOne,
    getToken,
};

export default crud;