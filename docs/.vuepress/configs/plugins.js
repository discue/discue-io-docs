import prismPlugin from '@vuepress/plugin-prismjs'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default [
    prismPlugin(false),
    sitemapPlugin({
        hostname: 'https://docs.discue.io',
        excludeUrls: [
            'https://docs.discue.io/api-reference/'
        ]
    }),
    shikiPlugin({ theme: 'dark-plus' })
]