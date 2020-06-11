<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" v-bind:key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
// In order to use the getters from our store modules we need to import "mapGetter"
// from Vuex which maps getters to our component. It works similar to "connect" 
// in React / Redux. 

// The way that we impliment the map getter or how we define which getters we want 
// to use is within the computed property. We add it to our export default, then 
// call the "mapGetters" function, and pass the getters we want to use into the function 
// wrapped in an array. In our case, we only have the "allTodos" getter which returns 
// all of the todos from the state. 

// Now that we have a way to receive all of the getters from the state we can loop 
// through them (the todos will be returned in an array) and map each todo to a div.

// We use "mapActions" to call actions, so we add methods object to our export default
// and pass in the actions we want to use similar to the way mapGetters works.
// "fetchTodos" returns an object so we use the spread operator on all mapActions to 
// avoid nested objects.  

import { mapGetters, mapActions } from "vuex"; 
export default {
  name: "Todos",
  methods: {
    //mapped to the component but not called yet...
   ... mapActions(["fetchTodos"]) 
  },
  computed: mapGetters(["allTodos"]),
  // fetchTodos action is called before the component loads. 
  // "computed()" is a lifecycle method that is fired off before the component loads.
  created() {
    this.fetchTodos() 
  }
}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
    cursor: pointer;
  }
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
  }
  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }
  @media (max-width: 500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
</style>