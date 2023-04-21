import { createApp } from 'vue'


import ElementPlus from 'element-plus'
import '@/style/index.scss'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import { createPinia } from 'pinia'


import router from '@/router/index.js'


import App from './App.vue'
const app = createApp(App)
app.use(ElementPlus).use(createPinia()).use(router).mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}