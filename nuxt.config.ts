// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/tailwind.css', '~/assets/styles/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/additionalPreload.scss" as *;',
				},
			},
		},
	},
	app: {
		head: {
			title: 'ETE',
			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'ETE' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
		// pageTransition: { name: 'page', mode: 'out-in' },
		// layoutTransition: {
		// 	name: 'slide',
		// 	mode: 'out-in',
		// },
	},
	modules: ['nuxt-primevue', '@nuxtjs/tailwindcss', 'shadcn-nuxt'],
	primevue: {},
});
