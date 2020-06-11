// This store folder is a centralized store for all of our state (data). 

// This is an entrypoint to Vuex and where we combine all of our modules. 

import Vuex from "vuex"; 
import Vue from "vue";
import Todos from "./modules/todos"; 

// Load Vue
Vue.use(Vuex); 

// Create Store 
export default new Vuex.Store({
  // This will export all the modules in our app 
  modules: {
    Todos
  }
})