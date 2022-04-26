<script setup>
    import Button from 'primevue/button';
    import InputText from 'primevue/inputtext';
    import InputCid from '../../core/input/InputCid.vue';
</script>

<script>
    export default{
        data(){
            return {user:{login: '', password: ''}};
        },
        methods:{
            submit(/*ev*/){
                //ev.preventDefault();
                console.log(this.user);
            }
        }
    }
</script>

<template>
    <h1>Connexion</h1>
    <form @submit.prevent="submit">
        <div>
            <!--<label>Login</label>
            <InputText type="text" v-model="user.login" />-->
            <InputCid label="Login" type="text" v-model="user.login" />
        </div>
        <div>
            <!--<label>Mot de passe</label>
            <InputText type="password" v-model="user.password" />-->
            <InputCid label="Mot de passe" type="password" v-model="user.password" />
        </div>
        <div>
            <Button type="submit">GO</Button>
        </div>
    </form>
</template>