// This is where we put our State, Getters, Actions, and Mutations. We are going to 
// make requests from here to our backend.

// From this file we want to be able to get the todos from the application level state
// with Vuex into the Todos component. In order for us to get the todos from state 
// into our Todos component to display we need to add a getters called "allTodos"
// which is a function that returns all todos from state. 

// In order for us to retrive data from the backend we need to create an action thats
// going to make a request, get a response, and then call a mutations 
// (a mutation is what actually manipulates the state). When you create an action it takes in an 
// object with a few items in it but we only need "commit" 
// ("commit" is what we use to commit a mutation, we don't call a mutions directly
// we call it with "commit").    

import axios from "axios"; 

const state = {
  todos: [] 
};

const getters = {
  allTodos: (state) => state.todos
};
const actions = {
  async fetchTodos() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    console.log(response.data);
  }
};
const mutations = {};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
