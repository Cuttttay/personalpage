import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
//引入路由器
import router from './router'
//创建一个应用
const app = createApp(App)
//使用插件
app.use(ElementPlus)
app.use(router)
//挂载整个应用到app容器中
app.mount('#app')
