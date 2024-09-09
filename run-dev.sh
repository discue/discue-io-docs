#!/bin/bash

set -exu

export NODE_ENV=development

# replace duplicate footer tag
sed -i 's/<footer/<div/g' ./node_modules/@vuepress/theme-default/lib/client/components/VPPageMeta.vue
sed -i 's/<\/footer>/<\/div>/g' ./node_modules/@vuepress/theme-default/lib/client/components/VPPageMeta.vue

npm run docs:serve