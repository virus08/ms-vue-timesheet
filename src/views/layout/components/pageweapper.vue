<template>
<div id="page-wrapper" class="gray-bg dashbard-1">
        <div class="row border-bottom">
        <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i class="fa fa-bars"></i> </a>
            <form role="search" class="navbar-form-custom" action="/home/search">
                <div class="form-group">
                    <input type="text" placeholder="Search for something..." class="form-control" name="top-search" id="top-search">
                </div>
            </form>
        </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">Welcome to Pre Sales Performance report.</span>
                </li>
                <!-- <mailb/><msgb/> -->
                <li>
                    <a href="/Logout">
                        <i class="fa fa-sign-out"></i> Log out
                    </a>
                </li>
            </ul>

        </nav>
        </div>
				<router-view></router-view>

                <div class="footer">
                    <div class="pull-right">
                        .
                    </div>
                    <div>
                        <strong>Copyright</strong> VSTECS (Thailand) Co.,Ltd. &copy; 2017-2018
                    </div>
                </div>
            </div>
        </div>

        </div>
    
</template>

<script>

import msgb from './msgb'
import mailb from './mailb'
export default {
  name: 'page-weapper',
  components: {
  	msgb,
  	mailb
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
