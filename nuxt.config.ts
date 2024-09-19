// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', 'shadcn-nuxt', '@nuxt/icon'],
  app: {
    head: {
      title: 'PBS Flashcards',
      // link: [
      //   { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      //   { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      //   { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      //   { rel: 'manifest', href: '/site.webmanifest' },
      //   { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#8b5cf6' },
      // ],
      // meta: [
      //   { name: 'description', content: 'View your family trees, and discover your lineage.' },
      //   { name: 'msapplication-TileColor', content: '#8b5cf6' },
      //   { name: 'theme-color', content: '#ffffff' },
      // ],
    },
  },
})