import fs from 'node:fs'

const { version } = JSON.parse(fs.readFileSync('package.json'))

export default [{
    text: 'Getting Started',
    link: '/getting-started/',
},
{
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
    text: `Community`,
    children: [
        {
            text: 'Code of Conduct',
            link: 'https://github.com/discue/.github/blob/main/CODE_OF_CONDUCT.md',
        },
        {
            text: 'Security Policy',
            link: `https://github.com/discue/.github/blob/main/SECURITY.md`,
        },
    ],
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