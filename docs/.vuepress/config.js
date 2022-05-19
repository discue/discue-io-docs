const defaultTheme = require('./theme')

const head = require('./configs/head')
const extendsMarkdown = require('./configs/extends-markdown')
const markdown = require('./configs/markdown')
const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')
const plugins = require('./configs/plugins')

module.exports = {
    lang: 'en-US',
    title: 'discue',
    description: 'Developer documentation for the secure and reliable messaging and queueing service.',
    theme: defaultTheme(
        {
            darkMode: false,
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