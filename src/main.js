import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 導入 element-plus package
import installElementPlus from './plugins/element'
// 導入全局樣式
import './element-variables.scss'
import './styles/index.scss'
// SvgIcon
import installIcons from '@/icons/index.js'
const app = createApp(App)
installElementPlus(app)
installIcons(app)
//
app.use(store).use(router).mount('#app')
