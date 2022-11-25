// import path from 'path'
import path from 'path-browserify'

/**
 * 返回所有路由
 */
const getChildrenRoutes = (routes) => {
  const result = []
  routes.forEach(route => {
    // 存在子路由
    if (route.children && route.children.length > 0) {
      result.push(...route.children)
    }
  })
  return result
}

/**
 * 處理脫離層級的路由:
 * 某個一級路由為其他的子路由，則剔除該一級路由
 * 保留路由完整性。
 * @param {*} routes
 */
export const filterRouters = (routes) => {
  // 獲取所有子路由的集合
  const childrenRoutes = getChildrenRoutes(routes)
  // 設定篩選條件
  return routes.filter(route => {
    // 返回 無重複路由
    return !childrenRoutes.find(childrenRoute => {
      // 有重複路由
      return childrenRoute.path === route.path
    })
  })
}

/**
 * 判斷數據是否為空值
 * @param {*} data
 */
function isNull (data) {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
/**
 * 根據 routes 數據，返回對應 menu 規則數組
 * @param {*} routes
 * @param {*} basePath
 */
export function generateMenus (routes, basePath = '') {
  const result = []
  // 遍歷路由表
  routes.forEach(route => {
    // 不存在 meta && 不存在 children，直接 return
    if (isNull(route.meta) && isNull(route.children)) return
    // 不存在 meta && 存在 children ，進入迭代
    if (isNull(route.meta) && !isNull(route.children)) {
      result.push(...getChildrenRoutes(route.children))
      return
    }
    // 合併 path 作為轉跳路徑
    const routePath = path.resolve(basePath, route.path)
    // 路由分離後，存在同名父路由的情況，需要單獨處理。
    let _route = result.find(r => r.path === routePath)
    if (!_route) {
      _route = {
        ...route,
        path: routePath,
        children: []
      }

      // icon 與 title 需要同時存在
      if (_route.meta.icon && _route.meta.title) {
        result.push(_route)
      }
    }
    // 存在 children ，進入迭代到children
    if (route.children) {
      _route.children.push(...generateMenus(route.children, _route.path))
    }
  })
  return result
}
