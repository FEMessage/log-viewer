<template>
  <div class="line-content" :class="className">{{ text }}</div>
</template>
<script>
export default {
  name: 'LineContent',
  props: {
    /**
     * log text
     */
    text: String,
    /**
     * The line content's class
     */
    className: [String, Array, Object]
  }
}
</script>
