const axios = require('axios')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mickey Stanley',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mickey Stanley. Freelance editor and writer in New York City.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3E3F40' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['~/assets/global.css'],
  modules: [
    '@nuxtjs/sitemap',
    ['@nuxtjs/google-analytics', {
      id: 'UA-76049118-1'
    }]
  ],
  router: {
    base: '/'
  },
  generate: {
    routes: function () {
      return axios.get('http://mickeystanley.com/data.json')
        .then((res) => {
          return Object.keys(res.data).map((key) => {
            return {
              route: key,
              payload: key
            }
          })
        })
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'http://mickeystanley.com',
    cacheTime: 1000 * 60 * 15,
    generate: true, // Enable me when using nuxt generate
    routes: function () {
      return axios.get('http://mickeystanley.com/data.json')
        .then((res) => {
          return Object.keys(res.data).map((key) => {
            return key
          })
        })
    }
  }
}
