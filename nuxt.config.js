module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '関西のScala大規模イベント！Scala関西Summit 2018 - 関西のScala大規模イベント11/10(土),11/11(日)開催',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', content: '関西のScala大規模イベント！11/10(土),11/11(日)大阪にて開催！'  },

      { property: 'og:title', content: 'Scala関西Summit 2018' },
      { property: 'og:image', content: 'https://scala-kansai2018.netlify.com/images/ogp.jpg' },
      { property: 'og:url', content: 'http://summit.scala-kansai.org/' },
      { property: 'og:description', content: '関西のScala大規模イベント！11/10(土),11/11(日)大阪にて開催！' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:url', content: 'http://summit.scala-kansai.org/' },
      { name: 'twitter:title', content: 'Scala関西Summit 2018' },
      { name: 'twitter:description', content: '関西のScala大規模イベント！11/10(土),11/11(日)大阪にて開催！' },
      { name: 'twitter:image', content: 'https://scala-kansai2018.netlify.com/images/ogp.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://use.fontawesome.com/releases/v5.0.13/css/all.css", integrity:"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp", crossorigin:"anonymous" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    "~/assets/scss/bootstrap.scss",
    "~/assets/scss/app.scss"
  ],
}
