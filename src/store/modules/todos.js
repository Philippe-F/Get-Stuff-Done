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

// A mutation is how we are going to add data to our state. So when "fetchTodos"
// is called in the "created()" functon (this is a lifecylce functon that is 
// called before the component loads) in the Todos Component. An async HTTP request 
// is sent to the backend, once the promise is resolved we use commit to call the 
// "setTodos" mutation, "commit" takes in the mutation type (key) as the first argument
// the second argument is the mutation payload (if the mutation takes a second argument
// after state). In our case we pass in the todos (response.data) as the second arg,
// then the "setTodos" mutation is fired off and sent down to the component. 

import axios from "axios"; 

const state = {
  todos: [] 
};

const getters = {
  allTodos: (state) => state.todos
};
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
    commit("setTodos", response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", 
    {title, completed: false})
      .catch(err => console.log(err))
    commit("newTodo", response.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit("removeTodo", id)
  },
  async filterTodos({ commit }, e) {
    // Get selected number

    // ParseInt takes in a string representation of a number and outputs the integer.
    // "e.target.options" returns an object containing the options that are nested inside of the 
    // select tag. "e.target.options.selectedIndex" returns the index of whichever 
    // options was selected in relation to its index in the "e.target.options" object.
    // "e.target.options[e.target.options.selectedIndex].innerText" returns the text 
    // (the value in the middle of the tags <option>200</option>). 

    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  async updateTodo({ commit }, todo) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${todo.id}`, 
      todo
    );
    
    commit("changeTodo", response.data)
  }
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => (state.todos.unshift(todo)),
  removeTodo:  (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  changeTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id = updatedTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }

    // state.todos[updatedTodo.id] = updatedTodo;
  }
};

export default {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
};
