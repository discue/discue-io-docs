import fs from 'node:fs'

const { version } = JSON.parse(fs.readFileSync('package.json'))

export default [{
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