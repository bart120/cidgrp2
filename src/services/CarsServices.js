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

    insertCar(car) {
        return axios.post(URL, car).then(resp => {
            return Promise.resolve(resp.data);
        });
    }

    async insertCarAsync(car) {
        //car.price = parseFloat(car.price);
        car.price = +car.price;
        const resp = await axios.post(URL, car);
        return await Promise.resolve(resp.data);
    }


}

