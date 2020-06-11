// This is where we put our State, Getters, Actions, and Mutations. We are going to 
// make requests from here to our backend.

// From this file we want to be able to get the todos from the application level state
// with Vuex into the Todos component. In order for us to get the todos from state 
// into our Todos component to display we need to add a getters called "allTodos"
// which is a function that returns all todos from state. 

// import axios from "axios"; 

const state = {
  todos: [
    {
      id: 1,
      title: "Todo One"
    },
    {
      id: 2,
      title: "Todo Two"
    }
  ] 
};

const getters = {
  allTodos: (state) => state.todos
};
const actions = {};
const mutations = {};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
