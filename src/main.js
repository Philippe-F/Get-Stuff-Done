import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"; 
// Add the centralized store for all of our state into the Vue instance 

Vue.config.productionTip = false

// new Vue only accepts lower case variables (ex. "store" not "Store")
new Vue({
  store, 
  render: h => h(App)
}).$mount('#app')
