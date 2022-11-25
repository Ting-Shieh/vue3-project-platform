import SvgIcon from '@/components/SvgIcon/index.vue'

const svgRequire = require.context('./svg', false, /\.svg$/)

svgRequire.keys().forEach(svgIcon => {
  console.log('svgIcon:', svgIcon)
  svgRequire(svgIcon)
})
export default app => {
  app.component('svg-icon', SvgIcon)
}
