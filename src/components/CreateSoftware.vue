<template>
  <div class="hello">
    <div style="text-align: center">
      <h1 style="color: rgba(102, 91, 199, 0.685)">
        JOBIN'S SOFTWARE DEVELOP SHOP
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

<br><br><br><br>

    {{ count > 10 ? "EXCEEDED QUOTA FOR TODAY. COME TOMORROW" : "OK" }}<br />
    TOTAL DEVICE : {{ count }} <br>
    <h1 :hidden="isHidden" style="color: blue; font-family: 'Courier New'">

       {{form.fname }} {{form.lname}} plans to repair {{form.device }} by dropping on DATE {{form.dod}} with 
       pick-up on {{form.dop}} with Rs {{form.estfund}}
      
    </h1><br> {{articleId}}
  

    <el-form id="form1" :model="form" :disabled="isDisabled" label-width="210px" size="default" label-position="right" >
     <el-col :span="8">
    <el-form-item label="NAME"  >
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="DEVICE"  >
      <el-input v-model="form.device" />
    </el-form-item>


    <el-form-item label="PRIORITY">
      <el-select v-model="form.priority" placeholder="please select your zone">
        <el-option label="NORMAL" value="normal" />
        <el-option label="ASAP" value="asap" />
      </el-select>
    </el-form-item>

     </el-col>
     
    <el-form-item label="DROP DATE">
      <el-col :span="6">
        <el-date-picker
          v-model="form.dropdate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>
      <el-col :span="6">
        <el-time-picker
          v-model="form.dropdate"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>


<el-form-item label="PICK DATE">
      <el-col :span="6">
        <el-date-picker
          v-model="form.pickdate"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>
      <el-col :span="6">
        <el-time-picker
          v-model="form.pickdate"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>









<el-row :span="6">
    <el-form-item label="Estimate Told">
      <el-switch v-model="form.estsaid" />
    </el-form-item>
   <el-form-item label="Estimated Fund"  >
      <el-input v-model="form.estfund" @keypress="validateNumber"/>
    </el-form-item>
</el-row>

    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="PCB" name="type" />
        <el-checkbox label="Fuse Replace" name="type" />
        <el-checkbox label="Revolving Motor" name="type" />
        <el-checkbox label="Simple" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Complexity">
      <el-radio-group v-model="form.complexity">
        <el-radio label="Known" />
        <el-radio label="Research" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Comments">
      <el-input v-model="form.comments" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>

      <el-col :span="1" class="text-center">
        <span class="text-gray-500">--</span>
      </el-col>

       <div class="demo-progress">
    <el-progress
      :percentage="100"
      :status="status"
      :indeterminate="indeterminate"
      :duration="3"
    />
 </div>
    </el-form-item>


  </el-form>

 
<el-input v-model="input" placeholder="Please input" />
<InputText type="text" v-model="value5" disabled />

</div>
</template>

<script  setup>
import { ref } from 'vue'
// import { reactive } from 'vue'

// const size = ref('default')
const input = ref('')
// do not use same name with ref
// const form = reactive({
//   name: '',
//   region: '',
//   date1: '',
//   date2: '',
//   delivery: false,
//   type: [],
//   resource: '',
//   desc: '',
// })

// const onSubmit = () => {
//   console.log('submit!')
// }

 const value5 = ref('PrimeVue');
</script>

<script>
import axios from "axios";
// const host  = "http://localhost:8080";   
// const host  = "http://34.93.248.195:8080"; 
// var host  = "http://" + process.env.IP + ":8080";  
var host  = "https://backend-kzgmyi7nmq-uc.a.run.app";

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
        indeterminate : "true",
        status : "false",
        form : {
          id : '',
          name : '',
          priority : '',
          device :'',
          complexity : '',
          type : [],
          estfund :'',
          estsaid : '',
          comments : '',
          dropdate: '',
          pickdate : ''
         }
        }
    },
    methods: {
       validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
      async onSubmit(e){
               e.preventDefault();
                if(!this.form.name){
                    alert('Please Add First Name')
                    return
                }
                if(!this.form.device){
                    alert('Please Add Device Name')
                    return
                }
                  if(!this.form.estfund ){
                    alert('Please Add estimated fund')
                    return
                }

              var req_headers = {headers: {'Content-Type' : 'application/json'} }
                 const response1 = await axios.get(host+"/id",req_headers);
                  
                     var id = ""+ (response1.data[0]+1);
                     const response = await axios.post(host,{id ,form : this.form },req_headers);
                   
                     if(response.data == "POST DONE")
                       { 
                        this.indeterminate = "false",
                        this.status = "success"
                          document.getElementById("form1").reset()
                       }

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

.demo-progress .el-progress--line {
  margin-bottom: 2px;
  width: 550px;
}
</style>
