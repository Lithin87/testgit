<template>
  <div>
    <vue-good-table
      :columns="columns" :rows="rows" theme="black-rhino"/>
      <!-- <template #table-actions-bottom>
        This will show up on the bottom of the table.
      </template> -->
    <!-- </vue-good-table> -->
    <p>hii {{this.rows}} hii</p>
  </div>
  {{ errors }}
</template>

<script>
import axios from "axios";
// const host  = "https://sohanapp.azurewebsites.net";  
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
          label: "FNAME",
          field: "form.fname",
        },
        {
          label: "LNAME",
          field: "form.lname",
        },
        {
          label: "DEVICE",
          field: "form.device"
        },
        {
          label: "DateOfDrop",
          field: "form.dod",
          // type: "date",
        },
        {
          label: "DateOfPick",
          field: "form.dop",
          // type: "date",
        },
        {
          label: "Est Fund",
          field: "form.estfund",
          type: "nunmber",
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
      const response = await axios.get("http://sohanapp.azurewebsites.net/api/HttpTrigger1");
      this.rows = response;
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>