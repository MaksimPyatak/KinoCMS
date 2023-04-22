import { createApp } from 'vue' //!!!!!
import { createPinia } from 'pinia'

////import adminlte styles
//import '@/../node_modules/admin-lte/dist/css/adminlte.min.css';
//import '@/../node_modules/admin-lte/dist/css/adminlte.min.css';
//import "@/../node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
//import "@/../node_modules/admin-lte/plugins/summernote/summernote-bs4.min.css";
//import "@/../node_modules/admin-lte/plugins/daterangepicker/daterangepicker.css";
//import "@/../node_modules/admin-lte/plugins/jqvmap/jqvmap.min.css";
//import "@/../node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
//import "@/../node_modules/admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
//import "@/../node_modules/admin-lte/plugins/bootstrap4-duallistbox/bootstrap-duallistbox.min.css";
//import "@/../node_modules/admin-lte/plugins/bs-stepper/css/bs-stepper.min.css";
//import "@/../node_modules/admin-lte/plugins/dropzone/min/dropzone.min.css";

import App from '@/app/index.vue'
import router from '@/router'

export const app = createApp(App).use(createPinia()).use(router)