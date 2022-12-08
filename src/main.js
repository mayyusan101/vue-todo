import { createApp } from 'vue'
import App from './App.vue'
import store from './store'//'./store/index.ts ok too

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                //core css
import 'primeicons/primeicons.css'               
import '/node_modules/primeflex/primeflex.css'
import Card from 'primevue/card';//icons
import InputText  from 'primevue/inputtext'
import Button from 'primevue/button'
const app = createApp(App)
app.use(PrimeVue, {ripple:true});
app.use(store)
app.component('Card', Card)
app.component('InputText',InputText )
app.component('Button', Button)

app.mount('#app')
