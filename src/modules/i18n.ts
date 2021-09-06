import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.json'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.json')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

export const install: UserModule = (app: App) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n);
}