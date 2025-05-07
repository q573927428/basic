import type { Menu } from '#/global'

const menus: Menu.recordRaw = {
  meta: {
    title: '多级导航',
    icon: 'heroicons-solid:menu-alt-3',
  },
  children: [
    {
      path: '/ceshi/page',
      meta: {
        title: '导航1',
      },
    },
  ],
}

export default menus
