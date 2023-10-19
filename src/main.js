import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss';
import $ from 'jquery';
window.$ = $;
import 'bootstrap';

createApp(App).use(router).mount('#app')
