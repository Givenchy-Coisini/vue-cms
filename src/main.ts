import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'

const app = createApp(App)
app.use(router)
app.use(store)
installElementPlus(app)
app.mount('#app')
