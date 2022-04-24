const anchorPlugin = require('markdown-it-anchor')
const { path } = require('@vuepress/utils')

// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

const slugify = (str) => {
    return str
        .normalize('NFKD')
        // Remove accents
        .replace(rCombining, '')
        // Remove control characters
        .replace(rControl, '')
        // Replace special characters
        .replace(rSpecial, '-')
        // Remove continuos separators
        .replace(/-{2,}/g, '-')
        // Remove prefixing and trailing separators
        .replace(/^-+|-+$/g, '')
        // ensure it doesn't start with a number (#121)
        .replace(/^(\d)/, '_$1')
        // lowercase
        .toLowerCase()
}

module.exports = {
    // site config
    lang: 'en-US',
    title: 'discue',
    description: 'Developer documentation of discue.io: Your secure and reliable messaging and queueing service.',
    darkMode: false,
    plugins: [
        ["@vuepress/plugin-prismjs", true],
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        // ["@vuepress/plugin-shiki", {
        //     theme: 'material-default'
        // }],
    ],
    extendsMarkdown: (md) => {
        md.use(require('markdown-it-attrs'), {
            allowedAttributes: ['id'],
            leftDelimiter: '[',
            rightDelimiter: ']',
            allowedAttributes: []  // empty array = all attributes are allowed
        })
        md.use(anchorPlugin, {
            level: [1, 2, 3, 4, 5, 6],
            slugify,
            permalink: anchorPlugin.permalink.ariaHidden({
                class: 'header-anchor',
                symbol: '#',
                space: true,
                placement: 'before',
            }),
        })
    },
    markdown: {
        extractHeaders: { level: [2, 3, 4, 5, 6] },
        anchor: false
    },
    theme: path.resolve(__dirname, './theme'),
    head: [
    themeConfig: {
        logo: '/logo.svg',
        logoDark: '/icons-fire-all-gray/web/icon-96.png',
        docsDir: 'docs',
        docsBranch: 'master',
        repo: 'discue/discue-io-docs',
        repoLabel: 'GitHub',
        sidebarDepth: 4,
        navbar: [{
            text: 'Getting Started',
            link: '/getting-started/',
        }, {
            text: 'API Overview',
            link: '/api-overview/',
        }, {
            text: 'API Reference',
            link: '/api-reference/',
        }],
    },
}