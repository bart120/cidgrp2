<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import InputCid from '../../core/input/InputCid.vue';
    import InputCidMail from '../../core/input/InputCidMail.vue';
</script>

<script>
    export default{
        data(){
            return {user:{login: '', password: ''}, valid: false};
        },
        methods:{
            submit(/*ev*/){
                //ev.preventDefault();

                console.log(this.user);
            },
            statusChange(status){
                this.valid = status == 'OK';
            }
        }
    }
</script>

<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit" novalidate>
        <div>
            <!--<label>Login</label>
            <InputText type="text" v-model="user.login" />-->
            <InputCidMail label="Login" type="text" v-model="user.login" @statusChange="statusChange" />
        </div>
        <div>
            <!--<label>Mot de passe</label>
            <InputText type="password" v-model="user.password" />-->
            <InputCid label="Mot de passe" type="password" v-model="user.password" />
        </div>
        <div>
            <Button type="submit" :disabled="!valid">GO</Button>
        </div>
    </form>
</template>