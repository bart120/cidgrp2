<script setup>
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';

</script>


<script>
import BrandsService from '../../../services/BrandsService';
import CarsService from '../../../services/CarsServices';

    const servBrand = new BrandsService();
    const servCar = new CarsService();

    export default{
        data(){
            return {cars: []};
        },

        methods:{
            async displayCars(){
                /*servBrand.getBrands().then(data => {
                    console.log('test: ', data);
                }).catch(err =>{
                    console.warn(err);
                });*/

                //const data = await servCar.getCarsAsync();
                //console.log('test: ',data);
                //this.cars = data;

                /*servBrand.getBrands().then(brands =>{
                    servCar.getCars().then(cars =>{
                        cars.map(car => car.brandName = brands.find(e => e.id == car.brandID).name);
                        this.cars = cars;
                    });
                });*/

                /*servCar.getCars().then(cars =>{
                    const proms = cars.map(car => servBrand.getBrandById(car.brandID).then(brand => car.brandName = brand.name));
                    Promise.all(proms).then(() =>{
                        this.cars = cars;
                    });
                    
                });*/

                const cars = await servCar.getCars();
                const proms = cars.map(async car =>{
                    car.brandName = (await servBrand.getBrandById(car.brandID)).name;
                    return car;
                });
                await Promise.all(proms);
                this.cars = cars;
            }
        },
        beforeMount(){
            this.displayCars();
        }

    }
</script>

<template>
    <h1>Liste des voitures</h1>
        <DataTable :value="cars" responsiveLayout="scroll">
            <Column field="model" header="Nom"></Column>
            <Column field="price" header="Prix"></Column>
            <Column field="brandName" header="Marque">
                <!--<template #body="slotProps">
                    <p>{{slotProps.data.brandID}}</p>
                </template>-->
            </Column>
        </DataTable>
</template>