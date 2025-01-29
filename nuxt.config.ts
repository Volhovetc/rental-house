// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/styles/main.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/_mixins.sass" as *\n'
        }
      }
    }
  },
  imports: {
		dirs: [
			'stores',
			'types',
			'types/*.ts',
			'types/**/*.ts',
			'composables/*.ts',
			'composables/**/*.ts',
		],
	},
  modules: ['@nuxt/ui']
})