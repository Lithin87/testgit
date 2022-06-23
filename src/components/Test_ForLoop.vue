<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>FNAME</th>
          <th>LNAME</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.fname }}</td>
          <td>{{ todo.lname }}</td>
          <td>{{ todo.company }}</td>
          <td>{{ todo.age }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
import axios from "axios";
// const host  = "http://sohanapp.azurewebsites.net";  
// const host  = "http://localhost:7071"; 
const host  = "http://localhost:8080";  



export default {
  name: "Test_ForLoop",
  data() {
    return {
      todos: ["PLEASE WAIT!!  FETCHING DATA"],
      errors: [],
      hover: true,
      size: 'lg'
    };
  },
  async created() {
    try {
      const response = await axios.get(host);
      this.todos = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>


<style scoped>
.hello {
  background: #b8e6c5;
  border: 2in;
  stroke-linecap: square;
  color: #4262b9;
}

.table {
  background: #c103fb;
  border: 2in;
  stroke-linecap: square;
  color: #14f623;
}


</style>

