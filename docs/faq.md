## 在 TypeScript 中指定组件的类型

```html
<script lang="ts">
// 需要引入这个
// import { LogViewerType } from '@femessage/log-viewer'
export default {
  mounted() {
    (this.$refs.logViewer as LogViewerType).autoScroll = false
  },
}
</script>
```
