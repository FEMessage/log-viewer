是否显示行号

set has-number true to show line number

```vue
<template>
  <div>
    <log-viewer class="has-number" v-for="hasNumber in hasNumbers" :key="hasNumber" :height="100" :log="log" :has-number="hasNumber" />
  </div>
</template>
<script>
  export default{
    data(){
      return {
        log: 'test number line.\ntest number line.',
        hasNumbers: [true, false]
      }
    }
  }
</script>
<style>
.has-number{
  margin-bottom: 8px;
}
</style>
```

