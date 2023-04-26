//import { app } from './app'
import { createApp } from 'vue' //!!!!!
import { createPinia } from 'pinia'

import App from '@/app/App.vue'
import { router } from './app/providers/router.js'
//import './styles/admin-lte-style.scss'
import './app/index.scss';

const app = createApp(App).use(createPinia()).use(router)

app.mount('#app')
