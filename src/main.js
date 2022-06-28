import { createApp } from 'vue'
import App from './App.vue'
// var https = require('https');
// var cors = require('cors')

import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueGoodTablePlugin from 'vue-good-table-next';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// var corsOptions = {
//     origin: true
//   }

const app = createApp(App)
app.use(VueGoodTablePlugin)
app.use(ElementPlus)
// app.use(https)
// app.use(cors(corsOptions))
app.mount('#app')
