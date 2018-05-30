<template>
</template>

<script>

export default {
  name: 'Authenticated',
  methods : {
    
  },
  created: async function () {
    var MyStorage =window.localStorage
    const code = this.$route.query.code;
    if (code) {
      let token;

      try {
        token = await Myfunction.getTokenFromCode(code);
      } catch (error) {
        console.log("Error exchanging code for token")
      }
      if(token){
        MyStorage.setItem('isAuthenticated',true)
        MyStorage.setItem('UID',1)
        MyStorage.setItem('Token',token)
        location.href='/'
        console.log(token)
      }
      
    } else {
      // Otherwise complain
      console.log("Authorization error")
    }
  }
}
</script>