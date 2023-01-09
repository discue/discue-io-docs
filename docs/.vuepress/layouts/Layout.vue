<script setup>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <ClientOnly>
        <Footer :show-logo="false" />
      </ClientOnly>
    </template>
  </ParentLayout>
</template>