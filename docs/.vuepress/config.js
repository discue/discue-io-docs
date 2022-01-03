/**
 * @typedef {import('@vuepress/theme-default').NavbarConfig} NavbarConfig
 */

/**
 * @type NavbarConfig
 */
module.exports = {
    // site config
    lang: 'en-US',
    title: 'discue',
    description: 'Documentation of discue.io: Your secure and reliable messaging and queueing service.',
    markdown: { extractHeaders: { level: [2, 3, 4] } },
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/icons/icon_light.png',
        logoDark: '/icons/icon_dark.png',
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