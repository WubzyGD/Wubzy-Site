export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'server',
    server: {port: 4042, host: "192.168.50.111"},

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Wubzy',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'theme-color', content: "#a172a6"},
            {
                name: "og:image",
                content: "https://cdn.discordapp.com/avatars/330547934951112705/a_3f507224356810d225b8e1ada0270bc4.gif?size=512"
            }
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://cdn.discordapp.com/avatars/330547934951112705/a_3f507224356810d225b8e1ada0270bc4.gif?size=128'
            },
            {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"},
            {rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~assets/css/styles.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        {src: '~/plugins/plugins.js', mode: 'client'}
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        publicPath: '/assets/'
    },

    loading: '~/components/preloader.vue',

    router: {},

    babel: {
        plugins: [
            ["@babel/plugin-proposal-private-methods", {"loose": true}]
        ]
    }
}
