<script setup>
       import InputText from 'primevue/inputtext';
import { computed, reactive } from '@vue/runtime-core';

       /*defineProps({
           label:String
       });*/

       // const valeur = reactive('');

       /*const stl = computed( () =>{
           return valeur == '' ? 'background-color:#aaa': ''; 
       });*/

</script>


<script>
    export default{
        data(){
            return {valeur: ''};
        },
        props:{
            label: String
        },
        computed:{
            stl(){
                return this.valeur == '' ? 'background-color:#aaa': '';
            }
        },

        mounted(){
            //console.log(this);
        }
    }
</script>

<template>
    <label>{{this.label}}</label>
   <InputText v-bind="this.$attrs" v-model="this.valeur" :style="stl" />
</template>