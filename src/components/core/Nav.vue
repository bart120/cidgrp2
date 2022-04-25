<script setup>
    import Menubar from 'primevue/menubar';
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
</script>

<script>
export default{
    data(){
        return {
            items :[
                {
                   label: 'Accueil',
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
    }
}
</script>


<template>
    <Menubar :model="items"  />
  
</template>
