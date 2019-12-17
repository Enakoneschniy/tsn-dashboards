import path from 'path'
import SpritesmithPlugin from 'webpack-spritesmith'
export default {
  mode: 'universal',
  router: {
    middleware: ['auth']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#000' },
  /*
  ** Global CSS
  */
  css: [
    'node_modules/slick-carousel/slick/slick.css',
    'assets/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: './plugins/slick.js', ssr: false },
    { src: './plugins/echarts.js', ssr: false },
    { src: './plugins/validate.js', ssr: true }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/router'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    host: 'localhost',
    port: '8080'
  },
  auth: {
    redirect: {
      login: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'post', propertyName: 'accessToken' },
          // user: { url: '/login', method: 'get', propertyName: '' },
          user: false,
          logout: false
        },
        tokenRequired: true
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, 'assets/ico'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'assets/sprites/sprite.png'),
          css: path.resolve(__dirname, 'assets/sprites/sprite.scss')
        },
        apiOptions: {
          cssImageRef: '~sprite.png'
        }
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
