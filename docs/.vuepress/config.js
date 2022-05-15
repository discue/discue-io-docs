const { viteBundler } = require('@vuepress/bundler-vite');

const defaultTheme = require('./theme')

const clientAppEnhanceFiles = require('./configs/client-app-enhance-files')
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
    bunder: viteBundler({}),
    theme: defaultTheme(
        {
            darkMode: false,
            logo: '/logo.svg',
            logoDark: '/icons-fire-all-gray/web/icon-96.png',
            editLinkText: 'Improve this page',
            docsDir: 'docs',
            docsBranch: 'master',
            repo: 'discue/discue-io-docs',
            repoLabel: 'GitHub',
            sidebarDepth: 4,
            navbar,
            sidebar
        },
    ),
    plugins,
    clientAppEnhanceFiles,
    extendsMarkdown,
    markdown,
    head,
}