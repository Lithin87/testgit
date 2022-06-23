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
// import axios from "axios";
// var https = require('https');
var http = require('http');
// const host  = "https://sohanapp.azurewebsites.net";  
// const host  = "http://localhost:7071"; 
//  var response_data;

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

        var optionsget = {
        // host : 'http://function-1-kzgmyi7nmq-el.a.run.app', 
          host : 'http://localhost:8080', 
         
        // port : 443,
        path : '/',
         withCredentials: false,
        method : 'GET' 
    };
    
     var reqGet = http.request(optionsget, function(res1) {
        console.log("statusCode: ", res1.statusCode);
    
        res1.on('data', function(d) {
            console.info('GET result:\n');
            this.rows = d;
            // process.stdout.write(d);
           
            // console.info('\n\nCall completed');
        });
    
    });
    
    reqGet.end();
    reqGet.on('error', function(e) {
   this.errors.push(e);
       
    });
 

    //  const response = await axios.get("https://function-1-kzgmyi7nmq-el.a.run.app");
      // this.rows = response.data;
      
    } catch (e) {
      this.errors.push(e);
    }
  },
};
</script>