<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>COMPANY</th>
          <th>AGE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.company }}</td>
          <td>{{ todo.age }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>


<script>
import axios from "axios";

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
      const response = await axios.get( "http://localhost:7071/api/HttpTrigger1" );
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

