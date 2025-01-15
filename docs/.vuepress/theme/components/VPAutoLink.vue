<script setup lang="ts">
import type { VNode } from 'vue';
import type { AutoLinkConfig } from 'vuepress/client';
import { AutoLink } from 'vuepress/client';
defineProps<{
    /**
     * The auto link config
     */
    config: AutoLinkConfig
}>()
defineSlots<{
    default?: (config: AutoLinkConfig) => VNode | VNode[]
    before?: (config: AutoLinkConfig) => VNode | VNode[] | null
    after?: (config: AutoLinkConfig) => VNode | VNode[] | null
}>()

</script>

<template>
    <AutoLink :config="config">
        <template v-if="$slots.default"
                  #default>
            <slot v-bind="config" />
        </template>
        <template #before>

            <Badge v-if="config.text && config.text.startsWith('Get ')"
                   class="mr-1"
                   text="GET"
                   type="get"
                   vertical="middle" />
            <Badge v-else-if="config.text && config.text.startsWith('Create')"
                   class="mr-1"
                   text="POST"
                   type="post"
                   vertical="middle" />
            <Badge v-else-if="config.text && config.text.startsWith('Add')"
                   class="mr-1"
                   text="POST"
                   type="post"
                   vertical="middle" />
            <Badge v-else-if="config.text && config.text.startsWith('Update')"
                   class="mr-1"
                   text="PUT"
                   type="put"
                   vertical="middle" />
            <Badge v-else-if="config.text && config.text.startsWith('Delete')"
                   class="mr-1"
                   text="DELETE"
                   type="delete"
                   vertical="middle" />
        </template>
        <template #after>
            <slot name="after"
                  v-bind="config" />
        </template>
    </AutoLink>
</template>