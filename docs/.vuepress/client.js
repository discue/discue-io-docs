import * as components from '@discue/ui-components'
import * as internalComponents from '@discue/ui-components/internal'
import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
    enhance({ app, _router, _siteData }) {
        Object.entries(components).forEach(([key, value]) => {
            app.component(key, value)
        })
        Object.entries(internalComponents).forEach(([key, value]) => {
            app.component(key, value)
        })
    },
    layouts: {
        Layout
    },
})
