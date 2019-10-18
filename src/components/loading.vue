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
      animation: blink 0.55s infinite both;
      margin-left: -1px;

      &:first-child {
        margin-left: 0;
      }

      &:nth-child(2) {
        animation-delay: 0.15s;
      }

      &:nth-child(3) {
        animation-delay: 0.35s;
      }
    }

    @keyframes blink {
      0% {
        opacity: 0.45;
      }

      20% {
        opacity: 1;
      }

      100% {
        opacity: 0.45;
      }
    }
  }
}
</style>
