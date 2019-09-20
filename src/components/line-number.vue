<template>
  <div class="line-number" :class="className">{{ number }}</div>
</template>
<script>
export default {
  name: 'LineNumber',
  props: {
    number: Number,
    className: [String, Array, Object]
  }
}
</script>
