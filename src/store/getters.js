import variables from '@/styles/variables.module.scss'
const getters = {
  cssVar: state => variables,
  sidebarOpened: state => state.app.sidebarOpened
}

export default getters
