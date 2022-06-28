<template>
  <div>
    <vue-good-table
      :columns="columns" :rows="rows"  max-height="300px" fixed-header="true" line-numbers="true"  :select-options="{
    enabled: true,
    selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
    selectionInfoClass: 'custom-class',
    selectionText: 'rows selected',
    clearSelectionText: 'clear',
    disableSelectInfo: true, // disable the select info panel on top
    selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
  }" theme="black-rhino"/>
      <!-- <template #table-actions-bottom>
        This will show up on the bottom of the table.
      </template> -->
    <!-- </vue-good-table> -->
  </div>
<h1 style="color: red" :hidden="isHidden"> {{this.errors}} </h1> 
</template>

<script>
import axios from "axios";
const host  = "http://localhost:8080";  

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
      isHidden : true,
    };
  },
  async created() {
    try {

     const response = await axios.get(host,{ headers: { 'Access-Control-Request-Private-Network': 'true'}});
      // const response1 = await axios.post(host,{form : {"dfd" : "dftghf"}},{ headers: { 'Access-Control-Request-Private-Network': 'true'}});
     this.rows = response.data;
      
    } catch (e) {
      this.errors.push(e.message);
       this.isHidden = false;
    }
  },
};
</script>