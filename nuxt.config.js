module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Scala関西Summit 2018 - 関西最大級Scalaカンファレンス 11/10(土),11/11(日)開催',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', content: '関西最大級Scalaカンファレンス！11/10(土),11/11(日)大阪にて開催！'  },

      { property: 'og:title', content: 'Scala関西Summit 2018' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Scalaをテーマとした、関西で最大級の技術カンファレンス。今年は2日間開催です！！日程: 2018年11月10日, 11日。初日はセッション形式。2日目はアンカンファレンスになります。' },
      { property: 'og:url', content: 'https://2018.scala-kansai.org/' },
      { property: 'og:image', content: 'https://2018.scala-kansai.org/ogp.jpg' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://2018.scala-kansai.org/' },
      { name: 'twitter:title', content: 'Scala関西Summit 2018' },
      { name: 'twitter:description', content: 'Scalaをテーマとした、関西で最大級の技術カンファレンス。今年は11月10日、11日の2日間開催！！' },
      { name: 'twitter:image', content: 'https://2018.scala-kansai.org/ogp.jpg' }
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
  plugins:[
    { src: '~plugins/ga.js', ssr: false }
  ]
}
