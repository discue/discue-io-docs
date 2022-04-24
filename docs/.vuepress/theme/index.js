const { path } = require('@vuepress/utils')

module.exports = {
    name: 'vuepress-theme-local',
    extends: '@vuepress/theme-default',
    layouts: {
        Layout: path.resolve(__dirname, 'layouts/Layout.vue'),
    },
    alias: {
        '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
    },
}