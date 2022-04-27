import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './conf/routes';
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import langFR from './conf/cid.fr.json';
import langEN from './conf/cid.en.json';

const i18n = createI18n({
    messages: {
        fr: langFR,
        en: langEN
    },
    locale: 'en',//navigator.language,
    fallbackLocale: 'fr'
});


createApp(App)
    .use(router)
    .use(createPinia())
    .use(PrimeVue)
    .use(i18n)
    .mount('#app')
