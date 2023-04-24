//import { app } from './app'
import { createApp } from 'vue' //!!!!!
import { createPinia } from 'pinia'

import App from '@/app/index.vue'
import { router } from '@/app/providers'
//import './styles/admin-lte-style.scss'
import '@/app/index.scss';

const app = createApp(App).use(createPinia()).use(router)

app.mount('#app')
