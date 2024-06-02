<script setup lang="ts">
import DropdownTransition from '@theme/DropdownTransition.vue';
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client/utils/isActiveSidebarItem.js';
import { useToggle } from '@vueuse/core';
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue';
import { AutoLink, useRoute, useRouter } from 'vuepress/client';

const props = defineProps({
  item: {
    type: Object as any,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

const isOpenDefault = computed(() =>
  item.value.collapsible ? isActive.value : true,
)
const [isOpen, toggleIsOpen] = useToggle(isOpenDefault.value)
const onClick = (e: Event): void => {
  if (item.value.collapsible) {
    e.preventDefault()
    // toggle open status on click
    toggleIsOpen()
  }
}

// reset open status after navigation
const unregisterRouterHook = router.afterEach((to) => {
  nextTick(() => {
    isOpen.value = isOpenDefault.value
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})
</script>

<template>
  <li>
    <AutoLink v-if="item.link"
              :class="itemClass"
              :config="item">

      <template #before>
        <Badge v-if="item.text.startsWith('Get ')"
               class="mr-1"
               text="GET"
               type="get"
               vertical="text-bottom" />
        <Badge v-else-if="item.text.startsWith('Create')"
               class="mr-1 inverse"
               text="POST"
               type="post"
               vertical="text-bottom" />
        <Badge v-else-if="item.text.startsWith('Add')"
               class="mr-1"
               text="POST"
               type="post"
               vertical="text-bottom" />
        <Badge v-else-if="item.text.startsWith('Update')"
               class="mr-1"
               text="PUT"
               type="put"
               vertical="text-bottom" />
        <Badge v-else-if="item.text.startsWith('Delete')"
               class="mr-1"
               text="DELETE"
               type="delete"
               vertical="text-bottom" />
      </template>

    </AutoLink>
    <p v-else
       tabindex="0"
       :class="itemClass"
       @click="onClick"
       @keydown.enter="onClick">
      {{ item.text }}
      <span v-if="item.collapsible"
            class="arrow"
            :class="isOpen ? 'down' : 'right'" />
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen"
          class="sidebar-item-children">
        <SidebarItem v-for="child in item.children"
                     :key="`${depth}${child.text}${child.link}`"
                     :item="child"
                     :depth="depth + 1" />
      </ul>
    </DropdownTransition>
  </li>
</template>
