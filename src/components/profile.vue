<template>
	<li class="nav-header">
  		<div class="dropdown profile-element">
  			<span>
        	<center><img id="profileImg" alt="image" class="img-circle" :src="img"/></center>
        </span>
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
            	<span class="clear">
            		<span class="block m-t-xs">
            			<strong class="font-bold">{{profile.displayName}} </strong><b class="caret"></b></span> 
              </span>
            </a>
						<span class="badge">{{profile.jobTitle}}</span>
			<ul class="dropdown-menu animated fadeInRight m-t-xs">
				<li> <router-link :to="'/Profile/'+profile.uid">Profile</router-link></li>
				<li class="divider"></li>
				<li><a href="/Logout">Logout</a></li>
			</ul>
		</div>
		<div class="logo-element">
			IN+
		</div>
	</li>
</template>

<script>
const MicrosoftGraph = require("@microsoft/microsoft-graph-client");
export default {
  name: 'profile',
  data () {
    return {
			profile : {},
			img:'data:image/jpeg;base64,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'    
		}
  },
  methods: {
  	getprofile : function (){
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
						//window.myProfile = this.profile
					}
				});
			client
				.api('/me/photo/$value')
				.responseType('blob')
				.get((err, res, rawResponse) => {
					if (err) throw err;
					const url = window.URL;
					const blobUrl = url.createObjectURL(rawResponse.xhr.response);
					document.getElementById("profileImg").setAttribute("src", blobUrl);
				});
  	}
  },
  created: function () {
  	this.getprofile();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
