const anchorPlugin = require('markdown-it-anchor')
const { viteBundler } = require('@vuepress/bundler-vite');
const { shikiPlugin } = require('@vuepress/plugin-shiki')

const defaultTheme = require('./theme')
const { path } = require('@vuepress/utils')
const { version } = require('../../package.json')

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
            navbar: [{
                text: 'Getting Started',
                link: '/getting-started/',
            }, {
                text: 'API Overview',
                link: '/api-overview/',
            }, {
                text: 'API Reference',
                link: '/api-reference/',
            {
                text: `v${version}`,
                children: [
                    {
                        text: 'Changelog',
                        link: 'https://github.com/discue/ui-components/blob/main/CHANGELOG.md',
                    },
                ],
            }],
            sidebar: [{
                text: 'Introduction',
                link: '/introduction/',
            }, {
                text: 'Getting Started',
                link: '/getting-started/',
            }, {
                text: 'API Overview',
                link: '/api-overview/',
            }, {
                text: 'API Best Practices',
                link: '/api-best-practices/',
            }, {
                text: 'API Reference',
                link: '/api-reference/',
            }],
        },
    ),
    plugins: [
        ["@vuepress/plugin-prismjs", false],
        shikiPlugin({ theme: 'dark-plus' })
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        // ["@vuepress/plugin-shiki", {
        //     theme: 'material-default'
        // }],
    ],
    clientAppEnhanceFiles: path.resolve(
        __dirname,
        './enhance/clientAppEnhance.js'
    ),
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
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: "/icons-fire-all-black/web/favicon.ico" }],
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: "/icons-fire-all-black/web/favicon.ico" }],
        ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/icons-fire-all-black/web/apple-touch-icon-152x152.png" }]
    ],
}