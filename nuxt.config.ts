// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { 
            name: 'page',
            mode: 'out-in',
        },
        head : {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },

    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/app.css'],
    modules: ["@nuxtjs/tailwindcss", '@nuxt/test-utils/module', "@nuxthub/core"]
})