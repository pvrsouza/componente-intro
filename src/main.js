import Vue from 'vue'
import App from './App.vue'

import Contadores from './components/Contadores.vue'

Vue.config.productionTip = false

//Components globais
Vue.component('app-contadores', Contadores)


new Vue({
  render: h => h(App),
}).$mount('#app')
