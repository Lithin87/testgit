<template>
   <CreateSoftware/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <Element/> -->
  <Vue_Good_Table_Next/>
  <!-- <Test_ForLoop/> -->
 
</template>

<script>
import CreateSoftware from './components/CreateSoftware.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Element from './components/Element.vue'
import Vue_Good_Table_Next from './components/Vue_Good_Table_Next.vue'
// import Test_ForLoop from './components/Test_ForLoop.vue'


export default {
  name: 'App',
  components: {
    CreateSoftware,
    // HelloWorld,
    // Element,
    Vue_Good_Table_Next,
    // Test_ForLoop
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
