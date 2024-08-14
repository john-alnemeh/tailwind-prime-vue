// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias:{
    assets: "/<rootDir>/assets",
  },
  
  css: ["~/assets/tailwind.css",'primeicons/primeicons.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    "@nuxt/image",
    "@vee-validate/nuxt"
  ],
primevue: {
  usePrimeVue: true,
  options: {
      unstyled: true
  },
  importPT: { as: 'Aura', from: '~/presets/aura' }     //import and apply preset
},
veeValidate: {
  // disable or enable auto imports
  autoImports: true,
},
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})