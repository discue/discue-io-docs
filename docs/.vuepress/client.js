import * as components from '@discue/ui-components/ssr'
import * as internalComponents from '@discue/ui-components/ssr/internal'
import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
    enhance({ app, _router, _siteData }) {
        Object.entries(components).forEach(([key, value]) => {
            app.component(key, value)
        })
        Object.entries(internalComponents).forEach(([key, value]) => {
            app.component(key, value)
        })
    }
})