import '@fortawesome/fontawesome-free/css/all.min.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.use(Buefy, { defaultIconPack: 'fas' })

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
