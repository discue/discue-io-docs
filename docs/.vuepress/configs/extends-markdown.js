const anchorPlugin = require('markdown-it-anchor')

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

module.exports = (md) => {
    md.use(require('markdown-it-attrs'), {
        allowedAttributes: ['id'],
        leftDelimiter: '[',
        rightDelimiter: ']',
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
}