const fs = require("fs")
const { join } = require("path")

const { pascalCase } = require('pascal-case');
const yaml = require('yaml')

const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)
    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(join(dirPath, file), arrayOfFiles)
        } else {
            const link = join(dirPath, file)
                .replace('docs', '')
                .replace('.md', '.html')
                .replace(/\\/g, '/')

            const content = fs.readFileSync(join(dirPath, file), 'utf-8')
            const frontMatter = content.substring(4, content.indexOf('---', 5))
            const endpoint = yaml.parse(frontMatter)
            const text = endpoint.api.name
            arrayOfFiles.push({
                text,
                link
            })
        }
    })

    return arrayOfFiles
}

const getAllFolders = function (dirPath) {
    const folders = []
    const entries = fs.readdirSync(dirPath)

    entries.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            folders.push(file)
        }
    })

    return folders
}

const getAllFilesSorted = (dirPath) => {
    const files = getAllFiles(dirPath)
    files.sort(({ text: a }, { text: b }) => {
        if (a.includes('Get')) {
            if (b.includes('Get')) {
                return 0
            } else {
                return -1
            }
        } else if (a.includes('Delete')) {
            if (b.includes('Delete')) {
                return 0
            } else {
                return 1
            }
        } else if (b.includes('Delete')) {
            return -1
        } else {
            return a - b
        }
    })
    return files
}

const filesAndFolders = getAllFolders(join('docs', 'api-reference')).reduce((context, folder) => {
    const sortedFiles = getAllFilesSorted(join('docs', 'api-reference', folder))
    context.push({
        text: pascalCase(folder),
        collapsible: true,
        children: sortedFiles
    })
    return context
}, [])

module.exports = [{
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
    collapsible: true,
    children: filesAndFolders
}]