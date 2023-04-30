import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import createStore from "./store/store"


createApp(App).use(createStore).use(router).mount('#app')