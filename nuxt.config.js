export default {
	target: 'static',

	head: {
		title: 'Vantaggi fiscali acquisto macchinari centri estetici',
		htmlAttrs: {
			lang: 'it'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'og:type', content: 'website'},
            { hid: 'description', name: 'description', content: 'Scopri quali sono i vantaggi fiscali dedicati ai centri estetici e all\'acquisto di nuove apparecchiature.' },
            { hid: 'og:title', name: 'og:title', content: 'Q Italy Vantaggi Fiscali 2022'},
            { hid: 'og:description', name: 'og:description', content: 'Scopri quali sono i vantaggi fiscali dedicati ai centri estetici e all\'acquisto di nuove apparecchiature.'},
            { name: 'og:url', content: 'https://q-italy.it/vantaggi-fiscali-2022/'},
            //{ name: 'og:image', content: 'TODO'}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
		]
	},

	css: [
		"~/assets/css/style.scss",
		"~/assets/css/fonts.scss",
		"~/assets/css/utility.scss",
		"~/assets/css/elements.scss",
		'@fortawesome/fontawesome-free/css/all.css',
	],


	router: {
		linkActiveClass: "active",
		base: '/vantaggi-fiscali-2022/'
	},

	plugins: [
	],

	components: true,

	buildModules: [
	],

	modules: [
		'bootstrap-vue/nuxt',
		'@nuxtjs/axios',
		'@nuxtjs/gtm'
	],

	axios: {
		baseURL: '/',
	},

	build: {
	},

	gtm: {
		id: 'GTM-NTT2FL8'
	}
}
