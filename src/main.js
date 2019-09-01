// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue      from 'vue'
import App      from './App'
import router   from './router'
import Vuetify  from 'vuetify'
import colors   from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import './mixin.js'
import 'babel-polyfill'

Vue.use(Vuetify, {
  theme: {
    primary   : colors.indigo.base,
    secondary : colors.lightBlue.lighten1,
    accent    : colors.amber.darken3,
  }
})

Vue.prototype.$BlogTitle = "夏休み旅行のためだけの日記"

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
