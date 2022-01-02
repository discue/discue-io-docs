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
        logo: 'https://avatars.githubusercontent.com/u/95524644?s=200&v=4',
        docsDir: 'docs',
        repo: 'discue/discue-io-docs',
        repoLabel: 'GitHub',
        sidebarDepth: 4,
        navbar: [{
            text: 'Getting Started',
            link: '/overview/',
        }, {
            text: 'API Overview',
            link: '/overview/',
        }, {
            text: 'API Reference',
            link: '/endpoints/',
        }],
    },
}