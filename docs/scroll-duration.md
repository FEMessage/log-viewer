scroll-duration

When auto-scroll is true, you can set scroll-duration to control how long(ms) scroll to the bottom. Defaults to be 0 means no duration.

```vue
<template>
  <log-viewer :log="log" :scroll-duration="1000" />
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
    this.getBuildLog()
  },
  methods:{
    getBuildLog(){
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
