import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/scss/all.scss'
import 'bootstrap'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)

app.mount('#app')
