<template>
  <div>
    <vue-good-table
      :columns="columns" :rows="rows" theme="black-rhino"/>
      <!-- <template #table-actions-bottom>
        This will show up on the bottom of the table.
      </template> -->
    <!-- </vue-good-table> -->
  </div>
  {{ errors }}
</template>

<script>
import axios from "axios";
const host  = "http://sohanapp.azurewebsites.net";  
// const host  = "http://localhost:7071"; 


export default {
  name: "Vue_Good_Table_Next",
  data() {
    return {
      columns: [
        {
          label: "ID",
          field: "id",
        },
        {
          label: "NAME",
          field: "name",
        },
        {
          label: "COMPANY",
          field: "company",
        },
        {
          label: "AGE",
          field: "age",
          type: "number",
        },
        {
          label: "Created On",
          field: "_ts",
          // type: 'date',
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM do yy',
        },
      ],
      rows: [],
      errors: [],
    };
  },
  async created() {
    try {
      const response = await axios.get(host+ "/api/HttpTrigger1"
      );
      this.rows = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>