<template>
 <center>
  <div class="hello">
    <h1>{{ profile }}</h1>
    <h2>Welcome to Presales Performance Report.</h2>
    {{profile.mail}}
   </div>
  </center>
</template>

<script>
const MicrosoftGraph = require("@microsoft/microsoft-graph-client");
export default {
  name: 'imp',
  props: ['imp'],
  components: {},
  data () {
    return {
      profile: {},
      conf: {
          email:'',
          password:'timesheet'
        },
      res:'',
      datatable:[],
      dataimport:[]
    }
  },
  methods: {
      mydataimport: function (Obj){
        var TAGET = window.API.ROOT
        var SOURCE = 'http://es-solution.fortiddns.com:8080/api'
        var API_Import = TAGET+'/timesheets'
        var loop = true
        while (loop) {
            var tmp = []
            tmp.length
            if (Obj.length>0){
              if (Obj.length>100){
                tmp = Obj.slice(0,100)
                Obj=Obj.slice(101,Obj.length)
                this.$http.post(API_Import,tmp).then((response) => {
                  //success
                  console.log(response.body)
                  //console.log("success")
                  //location.href = '/home/timesheet'
                  //this.tableData = response.body
                }, (response) => {
                  //error
                  alert(response.body.error.message)
                });
              }else {
                this.$http.post(API_Import,Obj).then((response) => {
                  //success
                  console.log(response.body)
                  //console.log("success")
                  //location.href = '/home/timesheet'
                  //this.tableData = response.body
                }, (response) => {
                  //error
                  alert(response.body.error.message)
                });
                Obj=[]
              }
            }else {
              loop = false
              console.log("End import")
            }
        }
        
      },
      getData : function () {
        //var API = window.API
        var IMP = 'http://es-solution.fortiddns.com:8080/api'
        var IMP_TIMESHEET = IMP+'/timesheets'
        var IMP_TIMESHEET_BY_UID= IMP_TIMESHEET+'?filter[where][UID]='
        var API_LOGIN = IMP+'/users/login'
        var myStorage = window.localStorage 
        const TOKEN = myStorage.getItem('Token');
        
        var client =  MicrosoftGraph.Client.init({
          authProvider: (done) => {
              done(null, TOKEN); //first parameter takes an error if you can't get an access token
          }
			  });
        client
          .api('/me')
          .get((err, res) => {
            if(err){
              myStorage.clear()
              location.href='/'
            }else if (res){
              this.profile=res
              this.conf.email=res.mail.toLowerCase();
              console.log(API_LOGIN)
              console.log(this.conf)
              this.$http.post(API_LOGIN,this.conf).then((response) => {
                let USERID = response.body.userId
                console.log(response.body)
                this.$http.get(IMP_TIMESHEET_BY_UID+USERID)
                .then((response) => {
                  //success
                  const MSID=this.profile.id
                  let dataimport = []
                  this.datatable = response.body

                  //this.$set(this.datatable,'UID',USERID)
                  this.datatable.forEach(function(value) {
                    var tmp= {
                      "Name_Surname": value.Name_Surname,
                      "Job_Type": value.Job_Type,
                      "Job_SOW": value.Job_SOW,
                      "Base_Technology": value.Base_Technology,
                      "UID": MSID,
                      "Job_Header": value.Job_Header,
                      "Job_detail": value.Job_detail,
                      "create_date": value.create_date,
                      "Job_date": value.Job_date,
                      "modify_date": Date.now(),
                      "Job_Hours": value.Job_Hours,
                      "Job_status": "Completed",
                      "Brands": value.Brands,
                      "Projid": value.Projid,
                      "Completed_date": value.Completed_date
                    }

                    dataimport.push(tmp)
                    //this.mydataimport(value)
                  });
                  console.log(dataimport)
                  this.mydataimport(dataimport)
                }, (response) => {
                  //error
                  alert(response.body.error.message)
                });

                
              }, (response) => {
                alert(response.body.error.message)
              });
            
            } // end of get profiles 
          });// end of client
           
      }// end of getData();
  },
  created: function () {
      this.getData();
  },
  mounted: function () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
