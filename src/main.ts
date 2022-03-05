import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/iconfont_svg.js'
import ElementPlus from 'element-plus'
import { globalRegister } from './global'
// import 'normalize.css'
import './assets/css/index.less'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import { setupStore } from './store'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(globalRegister)
setupStore()
app.use(router)

app.mount('#app')
