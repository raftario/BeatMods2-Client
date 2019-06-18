import '@fortawesome/fontawesome-free/css/all.min.css'
import Buefy from 'buefy'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'

Vue.use(Buefy, { defaultIconPack: 'fas' })

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
