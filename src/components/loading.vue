<template>
  <span class="log-loading">
    <slot>
      <span class="loading-dots">
        <span class="dot">•</span>
        <span class="dot">•</span>
        <span class="dot">•</span>
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
    .dot {
      animation: blink 0.6s infinite both;
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
