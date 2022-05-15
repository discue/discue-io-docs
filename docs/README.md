---
home: true
title: Home
heroImage: /icons-fire-light/web/icon-512.png
actions:
  - text: Introduction
    link: /introduction/#components
    type: primary
  - text: How to get started
    link: /getting-started/#prerequisites
    type: secondary
features:
  - title: Simple
    details: Easy to integrate REST API, fast response times, and secure storage.
  - title: Reliable
    details: Built from the ground up to provide the highest level of reliability, performance, and availability. 
  - title: Fault Tolerant
    details: Leverages multiple levels of redundancy built into on top of fault-tolerant cloud platforms.
  # - title: Scalable
  #   details: Scalable, modern platform that grows with your business.
---

### As Easy as 1, 2, 3

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# install in your project
yarn add -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
yarn vuepress dev

# build to static files
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">
  
```bash
# install in your project
npm install -D vuepress@next

# create a markdown file
echo '# Hello VuePress' > README.md

# start writing
npx vuepress dev

# build to static files
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>