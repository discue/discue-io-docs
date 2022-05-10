const { path } = require('@vuepress/utils')
const { defaultTheme } = require('@vuepress/theme-default')

module.exports = options => {
    return {
        name: 'vuepress-theme-local',
        extends: defaultTheme(options),
        layouts: {
            Layout: path.resolve(__dirname, './layouts/Layout.vue')
        },
        alias: {
            '@theme/PageMeta.vue': path.resolve(__dirname, './components/PageMeta.vue'),
        }
    }
}