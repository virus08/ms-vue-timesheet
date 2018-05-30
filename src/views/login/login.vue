<template>
  <div class="middle-box text-center loginscreen  animated fadeInDown ">
    <div>
      <div>
        <h1 class="logo-name">ES</h1>
      </div>
      <h3></h3>
      <p>
        Enterprise System @ VSTECS (Thailand) Performance Reoprt System
      </p>
      <p>Login in. To see it in action.</p>
          <a :href="loginurl" class="btn btn-primary block full-width m-b" ><i class="fa fa-windows"></i> Sign in With Microsoft</a>
        </div>
        <p class="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
      </div>
    </div>
</template>

<script>
var myStorage = window.localStorage
export default {
  name: 'layout',
  data () {
    return {
      loginurl : myStorage.getItem('loginurl')
    }
  },
  methods: {
    
  }
}
</script>

<style>
body {
    background-color: #f3f3f4;
}
</style>
