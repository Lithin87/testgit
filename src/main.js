import { createApp } from 'vue'
import App from './App.vue'

import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueGoodTablePlugin from 'vue-good-table-next';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(VueGoodTablePlugin)
app.use(ElementPlus)
app.mount('#app')
