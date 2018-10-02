import Vue from "vue"
// vue-smooth-scroll と vue-smoothscrollを間違えてインストールした。
// vue-smooth-scroll には 何故か、this.$Smooth が欠落していて Programatically な処理ができない
// 修正も大変なため 別途 vue-scrollto を入れて対応している。
import vueSmoothScroll from 'vue-smooth-scroll'
import VueScrollTo from 'vue-scrollto'

Vue.use(vueSmoothScroll)
Vue.use(VueScrollTo)
