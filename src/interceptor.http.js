import axios from 'axios';

export const axiosInstace = axios.create({
    baseURL: "http://localhost:4000"
})

axios.interceptors.request.use(
    (req) => {
        return req;
    },
    (error) => {
        console.log(error);
    }
)


axios.interceptors.response.use(
    (res) => {
        return res;
    },
    (error) => {
        console.log(error);
    }
)