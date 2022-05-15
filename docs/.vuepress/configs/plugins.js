const { shikiPlugin } = require('@vuepress/plugin-shiki')
const { sitemapPlugin } = require('vuepress-plugin-sitemap2')
const { 'default': prismPlugin } = require('@vuepress/plugin-prismjs')

module.exports = [
    prismPlugin(false),
    sitemapPlugin({
        hostname: 'https://docs.discue.io',
        excludeUrls: [
            'https://docs.discue.io/api-reference/'
        ]
    }),
    shikiPlugin({ theme: 'dark-plus' })
]