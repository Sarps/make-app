import Vue from 'vue'
import Vuetify from 'vuetify'
import store from '~/store'
import router from '~/router'
import { i18n } from '~/plugins'
import App from '~/components/App'
import '~/components'

Vue.use(Vuetify, {
  theme: {
    primary: '#EF5350',
    secondary: '#e57373',
    accent: '#000000',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n,
  store,
  router,
  ...App
})
