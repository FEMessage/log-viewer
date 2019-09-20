<template>
  <span class="log-loading">
    <slot>
      <span class="loading-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </span>
    </slot>
  </span>
</template>
<script>
export default {
  name: 'LogLoading'
}
</script>

<style lang="less">
.log-loading {
  .loading-dots {
    margin-right: 3px;

    span {
      animation: blink 1s infinite both;
      margin-left: 2px;

      &:first-child {
        margin-left: 0;
      }

      &:nth-child(2) {
        animation-delay: 0.33s;
      }

      &:nth-child(3) {
        animation-delay: 0.66s;
      }
    }

    @keyframes blink {
      0% {
        opacity: 0.2;
      }

      20% {
        opacity: 1;
      }

      100% {
        opacity: 0.2;
      }
    }
  }
}
</style>
