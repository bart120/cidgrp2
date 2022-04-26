import axios from 'axios'

const URL = 'https://formation.inow.fr/demo/api/v1/brands';

export default class BrandsService {

    getBrands() {
        /*axios.get(URL).then(resp => {
            console.log(resp);
            return resp.data;
        });*/
        return axios.get(URL).then(resp => {
            if (resp.data == []) {
                return Promise.reject('data ne peut être vide.');
            }
            return Promise.resolve(resp.data);
        });
    }

    getBrandById(id) {
        return axios.get(`${URL}/${id}`).then(resp => {
            return Promise.resolve(resp.data);
        });
    }

    async getBrandByIdAsync(id) {
        const resp = await axios.get(`${URL}/${id}`);
        return Promise.resolve(resp.data);
    }

}