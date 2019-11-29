basic usage

```vue
<template>
  <div>
    <div style="margin-bottom:8px;">Show travis log</div>
    <log-viewer :log="travisLog" :auto-scroll="false"/>
    <div style="margin-top:16px;margin-bottom:8px;">Show nuxt build log</div>
    <log-viewer :log="nuxtBuildLog"/>
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
      nuxtBuildLog:''
    }
  },
  mounted(){
    this.getTravisLog()
    this.getNuxtBuildLog()
  },
  methods:{
    getTravisLog(){
      const travisUrl = 'https://api.travis-ci.com/v3/job/261228572/log.txt' // you can edit other travisUrl.
      get(travisUrl).then((text)=>{
        this.travisLog = text
      })
    },
    getNuxtBuildLog(){
      const logUrl = 'https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/log-viewer'
      get(logUrl).then(res=>{
        res = JSON.parse(res)
        this.nuxtBuildLog = res.payload.logs
      })
    }
  }
}
</script>

```
