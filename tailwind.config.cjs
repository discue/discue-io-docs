module.exports = {
  darkMode: 'class',
  content: [
    "./docs/**/*.{vue,js,ts,jsx,tsx,scss,md}",
    "./docs/.vuepress/theme/components/*.{vue,js,ts,jsx,tsx,scss,md}",
    require.resolve('@discue/ui-components'),
    require.resolve('@discue/ui-components/internal')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}
