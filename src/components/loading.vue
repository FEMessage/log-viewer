<template>
  <span class="log-loading">
    <slot>
      <span class="loading-dots">
        <span>•</span>
        <span>•</span>
        <span>•</span>
      </span>
      <span>{{ loadingText }}</span>
    </slot>
  </span>
</template>
<script>
export default {
  name: 'LogLoading',
  props: {
    loadingText: {
      type: String,
      default: 'loading...'
    }
  }
}
</script>

<style lang="less">
.log-loading {
  .loading-dots {
    margin-right: 3px;

    span {
      animation: blink 1.4s infinite both;
      margin-left: -1px;

      &:first-child {
        margin-left: 0;
      }

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
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
