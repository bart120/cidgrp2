<script setup>
import InputCid from './InputCid.vue'

    //defineEmits(['statusChange'])
</script>


<script>
    const regMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    export default{
         data(){
            return {valeur: '', valid: false};
        },
        watch:{
            valeur(newVal, oldVal){
                if(regMail.test(this.valeur)){
                    this.valid = true;
                    this.$emit('statusChange', 'OK');
                    return;
                }
                this.valid = false;
                this.$emit('statusChange', 'KO');
            }
        },
        /*computed:{
            stl(){
                return (regMail.test(this.valeur));
            }
        },*/
        emits: ['statusChange']
    }
</script>

<template>
    <InputCid v-model="this.valeur" v-bind="this.$attrs"/>
    <p v-if="!valid" style="color: red">
        Adresse mail invalide.
    </p>
</template>