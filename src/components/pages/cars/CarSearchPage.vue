<script setup>
    import Button from 'primevue/button';
    import {brandDropMixin} from '../../../mixins/BrandDropMixin';
</script>
<script>
    export default{
        data(){
            return {search:{brandID:0}};
        },
        mixins: [brandDropMixin]
        /*async beforeMount(){
            console.log('coucou');
        }*/
    }
</script>

<template>
    <h1>Rechercher une voiture</h1>
    <form>
        <label>Marque</label>
            <Dropdown v-model="search.brandID" :options="brands"
                option-label="name" option-value="id"/>
        <Button type="submit">Enregistrer</Button>
    </form>
</template>