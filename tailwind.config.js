module.exports = {
  content: [
    "./docs/**/*.{vue,js,ts,jsx,tsx,scss,md}",
    "./docs/.vuepress/theme/components/*.{vue,js,ts,jsx,tsx,scss,md}",
    "./node_modules/@discue/ui-components/dist/ui.common.js",
    "./node_modules/@discue/ui-components/dist/internal/internal.common.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
