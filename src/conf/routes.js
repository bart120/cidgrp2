import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/pages/Home.vue'
import CarAddPage from '../components/pages/cars/CarAddPage.vue'
import CarListPage from '../components/pages/cars/CarListPage.vue'
import CarSearchPage from '../components/pages/cars/CarSearchPage.vue'
import CarPage from '../components/pages/cars/CarPage.vue'

const routes = [
    {path: '/', component: Home},
    /*{path: '/cars/add', component: CarAddPage},
    {path: '/cars/list', component: CarListPage},
    {path: '/cars/search', component: CarSearchPage}*/
    {
        path: '/cars',
        component: CarPage,
        children: [
            {path: 'add', component: CarAddPage},
            {path: 'list', component: CarListPage, name:'carListUrl'},
            {path: 'search', component: CarSearchPage}
        ]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes: routes
});