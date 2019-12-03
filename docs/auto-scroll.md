auto-scroll 属性设置是否自动滚动到底部

set auto-scroll true to auto scroll to bottom, and false to do nothing. Defaults to true.

```vue
<template>
  <log-viewer class="auto-scroll" :log="log" :auto-scroll="false" />
</template>
<script>
  const get = url => new Promise((resolve, reject)=>{
    const xhr = new XMLHttpRequest()
    xhr.open("GET",url)
    xhr.send()
    xhr.onload = data => resolve(data.target.responseText)
  })
  export default{
    data(){
      return {
        log: '',
        autoes: [true, false]
      }
    },
    mounted(){
      this.getTravisLog()
    },
    methods:{
      getTravisLog(){
        const travisUrl = 'https://api.travis-ci.com/v3/job/261228572/log.txt' // you can edit other travisUrl.
        get(travisUrl).then((text)=>{
          this.log = text
        })
      },
    }
  }
</script>
<style>
.auto-scroll{
  margin-bottom: 8px;
}
</style>

```
