import outlinePlugin from '@discue/vuepress-plugin-outline'
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default [
    shikiPlugin({ theme: 'dark-plus' }),
    outlinePlugin()
]