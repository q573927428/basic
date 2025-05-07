import type { RecursiveRequired, Settings } from '#/global'
import settingsDefault from '@/settings.default'
import { merge } from '@/utils/object'
import { cloneDeep } from 'es-toolkit'

const globalSettings: Settings.all = {
  app: {
    enableDynamicTitle: true,
  },
  menu: {
    mode: 'single',
  },
  copyright: {
    enable: true,
    dates: '2025-2030',
    company: '乐发发',
    website: 'http://www.yisuoyi.com',
    beian: '赣ICP备19004084号-3',
  },
}

export default merge(globalSettings, cloneDeep(settingsDefault)) as RecursiveRequired<Settings.all>
