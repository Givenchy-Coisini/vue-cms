import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/iconfont_svg.js'
import ElementPlus from 'element-plus'
// import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
setupStore()

app.mount('#app')
