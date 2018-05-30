const apiroot =  'http://es-solution.fortiddns.com:9090/api'
// http://localhost:8080/api/users/login
const hostURI = 'http://'+location.host
window.API = {
    ROOT: apiroot ,
    USER: apiroot +'/users/',
    LOGIN: apiroot + '/users/login',
    PROFILE: apiroot + '/profiles/',
    TIMESHEET: apiroot + '/Timesheets',
    SOW :apiroot + '/sows',
    PROJECT :apiroot + '/projects',
    TASKGROP :apiroot + '/jobtypes',
    BRANDS:apiroot + '/brands',
    TECH:apiroot + '/teches'
}
window.ENV ={
    APP_ID : '23a486fc-73fa-4fa7-8abf-db9ceb47591c',
    APP_PASSWORD: 'lpcsNSV46+*=dhxRSFK015%',
    APP_SCOPES: 'openid profile offline_access User.Read Mail.Read',
    REDIRECT_URI: hostURI+'/home',
    AUTH: {
        tokenHost: 'https://login.microsoftonline.com',
        authorizePath: 'common/oauth2/v2.0/authorize',
        tokenPath: 'common/oauth2/v2.0/token'
      }
}

const credentials = {
    client: {
      id: ENV.APP_ID,
      secret: ENV.APP_PASSWORD
    },
    auth: ENV.AUTH
  };