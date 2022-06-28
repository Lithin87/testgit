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
    <button  @click=" onSubmit1;open ='OPEN'; isDisabled = false; activeColor ='green'; formActiveColor ='blue';" style="color: green">OPEN</button>
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
    TOTAL DEVICE : {{ count }} <br>
    <h1 :hidden="isHidden" style="color: blue; font-family: 'Courier New'">

       {{form.fname }} {{form.lname}} plans to repair {{form.device }} by dropping on DATE {{form.dod}} with 
       pick-up on {{form.dop}} with Rs {{form.estfund}}
      
    </h1><br> {{articleId}}
  </div>
</template>



<script>
import axios from "axios";
const host  = "http://localhost:8080";   
    
export default {
    name : "Create_Software",
  data() {
      return { 
        count: 0 , 
        open : "OPEN",
        activeColor : "green",
        formActiveColor : "blue",
        fontSize : 40,
        isHidden : true,
        isDisabled : false,
        articleId : "gg",
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
               e.preventDefault();
                if(!this.form.fname || !this.form.device){
                    alert('Please Add a First Name')
                    return
                }

              var req_headers = { headers: { 'Access-Control-Request-Private-Network': 'true',
                                         'Content-Type' : 'application/json'} }
                     const response = await axios.post(host,{form : this.form },req_headers);
                this.articleId = response.data

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