<script setup lang="ts">
import ParentLayout from "@vuepress/theme-default/lib/client/components/AutoLink.vue";

const props = defineProps({
  item: {
    type: Object as PropType<NavLink>,
    required: true,
  },
})
</script>

<template>
  <ParentLayout :item="item">
    <template #before>

      <Badge v-if="item.text.startsWith('Get ')" class="mr-1" text="GET" type="get" vertical="middle" />
      <Badge v-else-if="item.text.startsWith('Create')" class="mr-1" text="POST" type="post" vertical="middle" />
      <Badge v-else-if="item.text.startsWith('Add')" class="mr-1" text="POST" type="post" vertical="middle" />
      <Badge v-else-if="item.text.startsWith('Update')" class="mr-1" text="PUT" type="put" vertical="middle" />
      <Badge v-else-if="item.text.startsWith('Delete')" class="mr-1" text="DELETE" type="delete" vertical="middle" />
    </template>
  </ParentLayout>
</template>
