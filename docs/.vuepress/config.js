import { viteBundler } from '@vuepress/bundler-vite'
import extendsMarkdown from './configs/extends-markdown'
import head from './configs/head'
import markdown from './configs/markdown'
import navbar from './configs/navbar'
import plugins from './configs/plugins'
import sidebar from './configs/sidebar'
import defaultTheme from './theme'

export default {
    bundler: viteBundler(),
    lang: 'en-US',
    title: 'discue',
    description: 'Developer documentation for the secure and reliable messaging and queueing service.',
    theme: defaultTheme(
        {
            colorMode: 'light',
            colorModeSwitch: false,
            logo: '/logo.svg',
            logoDark: '/icons-fire-all-gray/web/icon-96.png',
            editLinkText: 'Improve this page',
            docsDir: 'docs',
            docsBranch: 'main',
            repo: 'discue/api-docs',
            repoLabel: 'GitHub',
            sidebarDepth: 4,
            navbar,
            sidebar
        },
    ),
    plugins,
    extendsMarkdown,
    markdown,
    head,
}