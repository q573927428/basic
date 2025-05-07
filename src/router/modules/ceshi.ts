import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/ceshi',
  component: Layout,
  name: 'ceshi',
  meta: {
    title: '测试',
    icon: 'heroicons-solid:annotation',
  },
  children: [
    {
      path: '',
      name: 'ceshi1',
      component: () => import('@/views/ceshi/ceshi.vue'),
      meta: {
        title: '测试666',
        menu: false,
        breadcrumb: false,
        activeMenu: '/ceshi',
      },
    },
  ],
}

export default routes
