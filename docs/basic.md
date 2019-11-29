basic usage

```vue
<template>
  <div>
    <div style="margin-bottom:8px;">Show travis log</div>
    <log-viewer :log="travisLog"/>
    <div style="margin-top:16px;margin-bottom:8px;">Show serverless log</div>
    <log-viewer :log="serverlessLog"/>
  </div>
</template>

<script>
const get = url=>new Promise((resolve, reject)=>{
  const xhr = new XMLHttpRequest()
  xhr.open("GET",url)
  xhr.send()
  xhr.onload = data => resolve(data.target.responseText)
})
export default {
  data(){
    return {
      travisLog: '',
      serverlessLog:'',
      devopsLog:'',
    }
  },
  mounted(){
    this.getTravisLog()
    this.getServerlessLog()
    this.getDevopsLog()
  },
  methods:{
    getTravisLog(){
      const travisUrl = 'https://api.travis-ci.com/v3/job/261228572/log.txt' // you can edit other travisUrl.
      get(travisUrl).then((text)=>{
        this.travisLog = text
      })
    },
    getServerlessLog(){
      const logUrl = 'http://39.100.141.76:3000/mock/922/log/serverless'
      get(logUrl).then(res=>{
        res = JSON.parse(res)
        this.serverlessLog = res.payload.logs
      })
    }
  }
}
</script>

```