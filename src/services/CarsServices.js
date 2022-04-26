import axios from 'axios'

const URL = 'https://formation.inow.fr/demo/api/v1/cars';

export default class CarsService {

    getCars() {
        return axios.get(URL).then(resp => {
            if (resp.data == []) {
                return Promise.reject('data ne peut être vide.');
            }
            return Promise.resolve(resp.data);
        });
    }

    async getCarsAsync() {
        const resp = await axios.get(URL);
        if (resp.data == []) {
            return Promise.reject('data ne peut être vide.');
        }
        return Promise.resolve(resp.data);
    }


}
