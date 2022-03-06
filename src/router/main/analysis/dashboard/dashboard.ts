const dashboard = () => import('@/views/main/analysis/dashboard/dashboard.vue')
export default {
  // 为了演示echarts
  path: '/main/boiler/management',
  name: 'dashboard',
  component: dashboard,
  children: []
}
