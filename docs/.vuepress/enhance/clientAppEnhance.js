import * as components from '@discue/ui-components/ssr'
import * as internalComponents from "@discue/ui-components/ssr/internal"
import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app }) => {
    Object.entries(components).forEach(([key, value]) => {
        app.component(key, value)
    })
    Object.entries(internalComponents).forEach(([key, value]) => {
        app.component(key, value)
    })
})