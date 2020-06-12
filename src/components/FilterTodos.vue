<template>
  <div>
    <!-- The select HTML element has the ability to let events trigger actions in a 
    browser, like starting a JavaScript when a user clicks on an element. We use 
    "@change" to listen for changes in the select dropdown and call "filterTodos()" 
    whenevera change is input. -->

    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; 


export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"])
}
</script>

<style scoped>
  select {
    margin-top: 20px;
    padding: 6px;
    border: #41b883 1px solid; 
  }
</style>