import type { Menu } from '#/global'

const menus: Menu.recordRaw = {
  meta: {
    title: '测试导航',
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: '/multilevel/page',
      meta: {
        title: '导航1',
      },
    },
    {
      path: '/multilevel/page2',
      meta: {
        title: '导航2',
      },
    },
  ],
}

export default menus
