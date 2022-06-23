<template>
  <div class="hello">
    <div style="text-align: center">
      <h1 style="color: rgba(102, 91, 199, 0.685)">
        LIBIN'S SOFTWARE DEVELOP SHOP
      </h1>
    </div>

    <font :style="{ color: activeColor, fontSize: fontSize + 'px' }">
      STATUS : {{ open }}
    </font>
    <br/><br />

    <img src="../assets/shop_repair.jpg" alt="W3Schools.com" width="540" height="420" />
    <img src="../assets/shop_repair1.jpg" alt="W3Schools.com" width="500" height="420" />

    <br /><br />
    <button  @click=" open ='OPEN'; isDisabled = false; activeColor ='green'; formActiveColor ='blue';" style="color: green">OPEN</button>
    <button  @click=" open ='CLOSED.SEE YOU TOMORROW'; isDisabled =true; activeColor ='red'; formActiveColor = 'red';"  style="color:red">CLOSE</button>

    <br><br><br />

    <form id="form1" @submit="onSubmit" style="color: blue">
      <font :style="{ color: formActiveColor }">
        FIRST NAME       <input type="text" v-model="form.fname" :disabled="isDisabled" style="color: red" id="fname"/><br />
        LAST NAME        <input type="text" v-model="form.lname" :disabled="isDisabled" /><br />
        REPAIR DEVICE    <input type="text" v-model="form.device" :disabled="isDisabled" /><br />
        DATE OF DROP     <input type="text" v-model="form.dod" :disabled="isDisabled" /><br />
        DATE OF PICKUP   <input type="text" v-model="form.dop" :disabled="isDisabled" /><br />
        ESTIMATED FUND   <input type="text" v-model="form.estfund" :disabled="isDisabled" /><br />
      </font>

      <input  type="submit" value="SUBMIT"  @click="isHidden = false"  :disabled="isDisabled"/>
      <input  type="reset"  value="ENTER NEW"  @click="increment"  :disabled="isDisabled"/><br />
    </form>

<br><br><br><br>

    {{ count > 10 ? "EXCEEDED QUOTA FOR TODAY. COME TOMORROW" : "OK" }}<br />
    TOTAL DEVICE : {{ count }} <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h1 :hidden="isHidden" style="color: blue; font-family: 'Courier New'">

       {{form.fname }} {{form.lname}} plans to repair {{form.device }} by dropping on DATE {{form.dod}} with 
       pick-up on {{form.dop}} with Rs {{form.estfund}}
      
    </h1><br>
  </div>
</template>



<script>
import axios from "axios";
// var https = require('https');
const host  = "http://sohanapp.azurewebsites.net";  
// const host  = "http://localhost:7071";   

    // var optionsget = {
    //     host : 'sohanapp.azurewebsites.net', 
    //     port : 443,
    //     path : '/api/HttpTrigger1',
    //     method : 'GET' 
    // };
    
    
export default {
    name : "Create_Software",
  data() {
      return { 
        count: 0 , 
        open : "OPEN",
        activeColor : "green",
        formActiveColor : "blue",
        fontSize : 40,
        isHidden : "hidden",
        isDisabled : false,
        form : {
          fname : '',
          lname : '',
          device :'',
          dod : '',
          dop : '',
          estfund :''
         }
        }
    },
    methods: {
      async onSubmit(e){

                if(!this.form.fname){
                    alert('Please Add a First Name'+ e.target.length + host)
                    return
                }

    //           var reqGet = https.request(optionsget, function(res1) {
    //     console.log("statusCode: ", res1.statusCode);
    
    //     res1.on('data', function(d) {
    //         console.info('GET result:\n');
    //         process.stdout.write(d);
    //         res.send(JSON.parse(d));
    //         console.info('\n\nCall completed');
    //     });
    
    // });
    
    // reqGet.end();
    // reqGet.on('error', function(e) {
    //     console.error(e);
    // });

              
               const response = await axios.post(host +"/api/HttpTrigger1", {form : this.form });
                this.articleId = response.data.id;
 
            },

      increment() {
        this.isHidden = true
        this.count++
        document.getElementById("form1").reset()
        
        console.log('Reseting the form')
        var self = this; //you need this because *this* will refer to Object.keys below`
  
          //Iterate through each object field, key is name of the object field`
          Object.keys(this.form).forEach(function(key) {
            self.form[key] = '';
          });
        
        }}
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>


<!-- async created() {
  // POST request using axios with async/await
  const article = { title: "Vue POST Request Example" };
  const response = await axios.post("https://reqres.in/api/articles", article);
  this.articleId = response.data.id;
} -->