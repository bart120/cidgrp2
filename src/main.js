import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './conf/routes';
import { createPinia } from 'pinia'



createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue)
    .mount('#app')
