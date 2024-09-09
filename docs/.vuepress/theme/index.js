import { defaultTheme } from '@vuepress/theme-default';
import path from 'node:path';

export default options => {
    return Object.assign({}, defaultTheme(options), {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        alias: {
            '@theme/SidebarItem.vue': path.resolve(__dirname, './components/SidebarItem.vue')
        }
    })
}