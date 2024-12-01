import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default [
    prismjsPlugin(false),
    sitemapPlugin({
        hostname: 'https://docs.discue.io',
        excludeUrls: [
            'https://docs.discue.io/api-reference/'
        ]
    }),
    shikiPlugin({ theme: 'dark-plus' })
]