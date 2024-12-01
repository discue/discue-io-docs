import { defaultTheme } from '@vuepress/theme-default';

export default options => {
    return Object.assign({}, defaultTheme(options), {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        alias: {
            // '@theme/VPSidebarItem.vue': path.resolve(__dirname, './components/SidebarItem.vue')
        }
    })
}