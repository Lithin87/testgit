<template>
  <div>
    <vue-good-table
    :columns="columns" :rows="rows"  max-height="300px" fixed-header="true" line-numbers="true"   @on-selected-rows-change="selectionChanged" 
    
    :select-options="{
    enabled: true,
    selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
    selectionInfoClass: 'custom-class',
    selectionText: 'rows selected',
    clearSelectionText: 'clear',
    disableSelectInfo: false, // disable the select info panel on top
    selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
  }"
    :search-options="{enabled: true, placeholder: 'Search this table Jobin' }" theme="black-rhino">
    
    <div >
    <button>Action 1</button>
  </div>
  
      <template #table-actions-bottom>
       <h5 style="color: red" :hidden="isHidden"> {{this.errors}} </h5> 
      </template> 
    </vue-good-table>


  </div>

</template>

<script>
import axios from "axios";
// var host  = "http://"+process.env.IP+":8080"; 
// const host  ="http://34.93.248.195:8080";
var host  = "https://backend-kzgmyi7nmq-uc.a.run.app";


export default {
  name: "Vue_Good_Table_Next",
  data() {
    return {
      columns: [
        {
          label: "ID",
          field: "id",
           sortable: true
        },
        {
          label: "NAME",
          field: "form.name",
           sortable: true
        },
        {
          label: "DEVICE",
          field: "form.device",
           sortable: true
        },
        {
          label: "PRIORITY",
          field: "form.priority",
           sortable: true,
        },
        {
          label: "DateOfDrop",
          field: "form.dropdate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          dateOutputFormat: 'dd MMM yy',
           sortable: true
        },
        {
          label: "DateOfPick",
          field: "form.pickdate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          dateOutputFormat: 'dd MMM yy',
           sortable: true
        },
        {
          label: "Est Given",
          field: "form.estsaid",
           sortable: true
        },
        {
          label: "Est Fund",
          field: "form.estfund",
          type: "number",
           sortable: true
        },
        {
          label: "Activity Category",
          field: "form.type",
          type: "nunmber",
           sortable: true
        },
        {
          label: "Complexity",
          field: "form.complexity",
          type: "nunmber",
           sortable: true
        },
        {
          label: "Comments",
          field: "form.comments",
          type: "nunmber",
           sortable: true
        },
        {
          label: "Created On",
          field: "_ts",
           sortable: true
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
      var req_headers = { headers: {'Content-Type' : 'application/json'} }
      const response = await axios.get(host, req_headers);
      this.rows = response.data;
     
    } catch (e) {
      this.errors.push(e);
       this.isHidden = false;
    }
  },
  methods: {
        onRowClick(params) {
                 this.errors.push("GGG11"+params);
          }

  }
};
</script>