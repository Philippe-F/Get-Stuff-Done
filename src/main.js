import Vue from 'vue'
import App from './App.vue'
import Store from "./store/index"; 
// Add the centralized store for all of our state into the Vue instance 

Vue.config.productionTip = false

new Vue({
  Store, 
  render: h => h(App),
}).$mount('#app')
