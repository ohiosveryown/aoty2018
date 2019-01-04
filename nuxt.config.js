const pkg = require('./package')

module.exports = {
  mode: 'universal',

  router: {
    middleware: 'delay'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2018 Albums of the Year is a communal project built around music & friendship. A handful of friends rank their top albums of 2018. The project was designed and built by me, Matthew Pence @cmykw_ ', author: 'Matthew Pence – @cmykw_' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '@/assets/reset.scss',
    '@/assets/var.scss',
    '@/assets/util.scss',
    '@/assets/type.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
