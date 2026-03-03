// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  devServer: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: true,
      hmr: {
        protocol: "wss",
        clientPort: 443,
      },
    },
  },
  components: [
    {
      path: "~/components",
      ignore: [
        "**/intellitoggleassignment/**",
        "**/node_modules/**",
        "**/.nuxt/**",
      ],
    },
  ],
  css: ["~/assets/css/reset.css", "~/assets/css/fonts.css"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});
