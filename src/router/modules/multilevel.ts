import type { RouteRecordRaw } from 'vue-router'

function Layout() {
  return import('@/layouts/index.vue')
}

const routes: RouteRecordRaw = {
  path: '/multilevel',
  component: Layout,
  name: 'multilevelMenuExample',
  meta: {
    title: '多级导航',
    icon: 'i-heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: 'page',
      name: 'multilevelMenuExample1',
      component: () => import('@/views/multilevel/page.vue'),
      meta: {
        title: '导航1',
      },
    },
    {
      path: 'page2',
      name: 'multilevelMenuExample2',
      component: () => import('@/views/multilevel/page2.vue'),
      meta: {
        title: '导航2',
      },
    },
  ],
}

export default routes
