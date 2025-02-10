// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	css: ['~/assets/styles/main.sass'],
	vite: {
		css: {
			preprocessorOptions: {
				sass: {
					additionalData: '@use "~/assets/styles/_mixins.sass" as *\n',
				},
			},
		},
	},
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	icon: {
		customCollections: [
			{
				prefix: 'custom',
				dir: './assets/icons'
			},
		],
	},
	modules: ['@nuxt/ui', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt', '@nuxt/fonts', '@nuxt/icon'],
})
