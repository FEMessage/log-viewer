<template>
  <span class="log-loading">
    <slot>
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none" />
      </svg>
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
<style lang="stylus">
.log-loading {
  .circular {
    height: 10px;
    width: 10px;
    -webkit-animation: log-loading 2s linear infinite;
    animation: log-loading 2s linear infinite;
    // 位置相关
    margin-right: 3px;

    .path {
      -webkit-animation: loading-dash 1.5s ease-in-out infinite;
      animation: loading-dash 1.5s ease-in-out infinite;
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 2;
      stroke: #d6d6d6;
      stroke-linecap: round;
    }
  }
}

@keyframes log-loading {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>
