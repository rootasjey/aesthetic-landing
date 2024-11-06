import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { defineConfig, presetIcons } from 'unocss'
import config from '@una-ui/nuxt/una.config'

export default defineConfig({
  ...config,
  presets: [
    presetUno(),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      provider: 'fontshare',
      fonts: {
        sans: 'Inter',
        serif: 'Clash Display',
        mono: 'JetBrains Mono',
        title: 'Inter',
      }
    }),
  ],
  rules: [
    // [/^grid-cols-(\d+)$/, ([, d]) => ({ "grid-template-columns": `repeat(${d}, minmax(0, 1fr))` })],
  ],
  safelist: [
    // ...Array.from({ length: 24 }, (_, i) => `grid-cols-${i + 1}`),
  ],
})
