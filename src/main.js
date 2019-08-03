import Vue from 'vue'
import App from './App.vue'
import '@/i18n'
import 'materialize-css'
import '@/prototype'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
