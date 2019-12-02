scroll-with-animate 属性设置是否有滚动动画

set scroll-with-animate true to scroll with an animated

```vue
<template>
  <div>
    <log-viewer class="auto-scroll" v-for="scroll in scrollWithAnimate" :key="scroll" :log="log" :scroll-with-animate="scroll" />
  </div>
</template>
<script>
  import get from './get'
  export default{
    data(){
      return {
        log: '',
        scrollWithAnimate: [true, false]
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
