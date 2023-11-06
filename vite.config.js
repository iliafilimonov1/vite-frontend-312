import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prependData: `@import" @/src/sass/clients.sass ";`,
        },
      },
    },
  },
})
