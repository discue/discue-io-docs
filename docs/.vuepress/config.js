import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from '@vuepress/cli';
import { getDirname, path } from '@vuepress/utils';
import extendsMarkdown from './configs/extends-markdown';
import head from './configs/head';
import markdown from './configs/markdown';
import navbar from './configs/navbar';
import plugins from './configs/plugins';
import sidebar from './configs/sidebar';
import defaultTheme from './theme';

const __dirname = import.meta.dirname || getDirname(import.meta.url)

export default defineUserConfig({
    bundler: viteBundler(),
    lang: 'en-US',
    title: 'discue',
    description: 'Developer documentation for the secure and reliable messaging and queueing service.',
    theme: defaultTheme(
        {
            colorMode: 'light',
            colorModeSwitch: false,
            hostname: 'https://docs.discue.io',
            logo: '/logo.svg',
            logoDark: '/icons-fire-all-gray/web/icon-96.png',
            editLinkText: 'Improve this page',
            docsDir: 'docs',
            docsBranch: 'main',
            repo: 'discue/api-docs',
            repoLabel: 'GitHub',
            sidebarDepth: 4,
            navbar,
            sidebar,
            themePlugins: {
                prismjs: false,
            },
        },
    ),
    alias: {
        '@theme/VPAutoLink.vue': path.resolve(__dirname, './theme/components/VPAutoLink.vue')
    },
    plugins,
    extendsMarkdown,
    markdown,
    head,
})