import ElementPlus from 'element-plus'
import '../element-variables.scss'
import * as Icons from '@element-plus/icons-vue'
export default (app) => {
  app.use(ElementPlus)
  // 通过遍历的方式注册所有 svg组件，会牺牲一点点性能
  for (const i in Icons) {
    app.component(i, Icons[i])
  }
}
