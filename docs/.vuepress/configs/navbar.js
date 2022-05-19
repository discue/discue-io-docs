const { version } = require('../../../package.json')

module.exports = [{
    text: 'Getting Started',
    link: '/getting-started/',
}, {
    text: 'API',
    children: [
        {
            text: 'Overview',
            link: '/api-overview/',
        },
        {
            text: 'API Best Practices',
            link: '/api-best-practices/',
        },
        {
            text: 'API Reference',
            link: '/api-reference/',
        }
    ]
},
{
    text: `v${version}`,
    children: [
        {
            text: 'Changelog',
            link: 'https://github.com/discue/api-docs/blob/main/CHANGELOG.md',
        },
    ],
}]