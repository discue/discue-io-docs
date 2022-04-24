<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <footer class="h-40">
        <div class="grid grid-cols-5 gap-4 p-8">
          <div
            class="
              hidden
              col-span-2
              w-32
              self-center
              justify-self-center
              fill-current
              text-gray-900
            "
          >
       
          </div>
          <ul class="space-y-2">
            <li class="font-bold text-lg text-gray-800">Company</li>
            <li class="text-md text-gray-800">
              <a
                href="#features"
                class="
                  animate
                  font-bold
                  hover:border-b-4 hover:cursor-pointer
                  text-gray-500
                  hover:border-gray-500
                  text-md
                "
                >Features</a
              >
            </li>
            <li class="text-md text-gray-800">
              <a
                href="#how-it-works"
                class="
                  animate
                  font-bold
                  hover:border-b-4 hover:cursor-pointer
                  text-gray-500
                  hover:border-gray-500
                  text-md
                "
                >How it works</a
              >
            </li>
            <li class="text-md text-gray-800">Create account</li>
            <li class="text-md text-gray-800">Delete account</li>
            <li class="text-md text-gray-800">Cancel subscription</li>
          </ul>
          <ul class="space-y-2">
            <li class="font-bold text-lg text-gray-800">Resources</li>
            <li class="text-md text-gray-800">Getting Started</li>
            <li class="text-md text-gray-800">API Best Practices</li>
            <li class="text-md text-gray-800">API Overview</li>
            <li class="text-md text-gray-800">API Reference</li>
            <li class="text-md text-gray-800">Blog</li>
          </ul>
          <ul class="space-y-2">
            <li class="font-bold text-lg text-gray-800">Legal</li>
            <li class="text-md text-gray-800">
              <a
                href="/privacy"
                class="
                  animate
                  font-bold
                  hover:border-b-4 hover:cursor-pointer
                  text-gray-500
                  hover:border-gray-500
                  text-md
                "
                >Privacy Policy</a
              >
            </li>
            <li class="text-md text-gray-800">
              <a
                href="/terms"
                class="
                  animate
                  font-bold
                  hover:border-b-4 hover:cursor-pointer
                  text-gray-500
                  hover:border-gray-500
                  text-md
                "
                >Terms &amp; Conditions</a
              >
            </li>
            <li class="text-md text-gray-800">
              <a
                href="/imprint"
                class="
                  animate
                  font-bold
                  hover:border-b-4 hover:cursor-pointer
                  text-gray-500
                  hover:border-gray-500
                  text-md
                "
                >Imprint &amp; Legal Notice</a
              >
            </li>
          </ul>
          <small
            class="
              mt-8
              col-span-5
              font-bold
              text-md
              justify-self-center
              text-gray-800
            "
            ><small>© Copyright 2022, Stefan Pfaffel</small></small
          >
        </div>
      </footer>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>