import { defaultTheme } from '@vuepress/theme-default';
import { path } from '@vuepress/utils';

export default options => {

    return Object.assign({}, defaultTheme(options), {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        layouts: {
            Layout: path.resolve(__dirname, './layouts/Layout.vue')
        },
        alias: {
            '@theme/AutoLink.vue': path.resolve(__dirname, './components/AutoLinkWithHttpEndpointBadge.vue'),
            '@theme/HomeFooter.vue': path.resolve(__dirname, './layouts/HomeFooter.vue'),
            '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue')
        }
    })
}