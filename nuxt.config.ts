// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: '',
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    storageKey: 'nuxt-color-mode'
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', '@una-ui/nuxt', ],
  routeRules: {
    '/': { prerender: true },
    '/checkout': { swr: 3600 },
  },
  una: {
    prefix: 'U', // UBtn, UInput, UFormGroup, etc.
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
})