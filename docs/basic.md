basic usage

```vue
<template>
  <log-viewer :log="log"/>
</template>

<script>
const get = url => new Promise((resolve, reject)=>{
  const xhr = new XMLHttpRequest()
  xhr.open("GET",url)
  xhr.send()
  xhr.onload = data => resolve(data.target.responseText)
})
export default {
  data(){
    return {
      log:''
    }
  },
  mounted(){
    this.getNuxtBuildLog()
  },
  methods:{
    getNuxtBuildLog(){
      const logUrl = 'https://mockapi.eolinker.com/IeZWjzy87c204a1f7030b2a17b00f3776ce0a07a5030a1b/log-viewer'
      get(logUrl).then(res=>{
        res = JSON.parse(res)
        this.log = res.payload.logs
      })
    }
  }
}
</script>

```
