<script setup>
    import Menubar from 'primevue/menubar';
    import Button from 'primevue/button';
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '../../stores/userStore';
    /*import { reactive } from '@vue/reactivity';
    const items = reactive([
                {
                   label: 'Accueil',
                   icon:'pi pi-fw pi-file',
                   to: '/'
                },{
                    label: 'Voitures',
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister' , to:{name: 'carlist'}},
                        {label: 'Rechercher', to: '/cars/search'}
                    ]
                }
            ]);*/
    const {isConnected, user} = storeToRefs(useUserStore());
    const {logout} = useUserStore();
</script>

<script>
export default{
    mounted(){
        console.log(this);
    },
    data(){
        return {
            items :[
                {
                   label: this.$t('menu.home'),
                   icon:'pi pi-fw pi-file',
                   to: '/'
                },{
                    label: 'Voitures',
                    items:[
                        {label: 'Ajouter', to:'/cars/add'},
                        {label: 'Lister', to:{name: 'carListUrl'}},
                        {label: 'Rechercher', to:'/cars/search'}
                    ]
                }
            ]
        };
    },
    methods:{
        onLogout(){
            this.logout();
            this.$router.push({path:'/'});
        }
    }
}
</script>


<template>
    <Menubar :model="items">
        <template #end>
            <div v-if="! isConnected">
                <router-link to='/login'>{{this.$t('menu.login')}}</router-link>
            </div>
            <div v-else>
                Bonjour {{user?.name}} <Button type="button" @click="onLogout">Se déconnecter</Button>
            </div>
        </template>
    </Menubar>
</template>
