<script setup>
    import Button from 'primevue/button';
    import InputCid from '../../core/input/InputCid.vue';
    import Calendar from 'primevue/calendar';
    //import Dropdown from 'primevue/dropdown';
    //import BrandsService from '../../../services/BrandsService';
    import CarsService from '../../../services/CarsServices';
    import { brandDropMixin } from '../../../mixins/BrandDropMixin';
</script>

<script>
    //const servBrand = new BrandsService();
    const servCar = new CarsService();
    export default{
        data(){
            return {car:{}/*, brands: []*/};
        },
        mixins: [brandDropMixin],
        methods:{
            async submit(){
                /*servCar.insertCar(this.car).then(data=>{
                    alert(`Voiture enregistrée avec l'id ${data.id}`);
                });*/
                const data = await servCar.insertCarAsync(this.car);
                alert(`Voiture enregistrée avec l'id ${data.id}`);
            }
        },
        /*async beforeMount(){
            this.brands = await servBrand.getBrands();
        }*/
    }
</script>

<template>
    <h1>Ajouter une voiture</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <InputCid label="Modèle" v-model="car.model" type="text" />
        </div>
        <div>
            <InputCid label="Prix" v-model="car.price" type="number"/>
        </div>
        <div>
            <label>Mise en circulation</label>
            <Calendar v-model="car.dateOfCirculation" />
        </div>
        <div>
            <label>Marque</label>
            <Dropdown v-model="car.brandID" :options="brands"
                option-label="name" option-value="id"/>
        </div>
        <div>
            <Button type="submit">Enregistrer</Button>
        </div>
    </form>
</template>