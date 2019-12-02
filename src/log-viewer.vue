<template>
  <virtual-list
    class="log-viewer"
    ref="virturalList"
    v-bind="virtualAttrs"
    :size="rowHeight"
    :remain="remain"
    :bench="0"
    :start="start"
    :item="LineWrapper"
    :itemcount="linesCount"
    :itemprops="getLineWrapperProps"
    :onscroll="onscroll"
  >
  </virtual-list>
</template>
<script>
import VirtualList from 'vue-virtual-scroll-list'
import LineWrapper from './components/line-wrapper.vue'
import LogLoading from './components/loading.vue'
import parse from './utils'

export default {
  name: 'LogViewer',
  components: {
    VirtualList
  },
  props: {
    /**
     * VirtualList original props
     * Reference: https://github.com/tangbc/vue-virtual-scroll-list
     */
    virtualAttrs: {
      type: Object,
      default() {}
    },
    /**
     * A fixed row height in pixels. Controls how tall a line is, as well as the lineHeight style of the line's text.
     * Defaults to 20.
     */
    rowHeight: {
      type: Number,
      default: 20
    },
    /**
     * The log-viewer container height
     * Defaults to 0,and the component is 30 * rowHeight
     */
    height: {
      type: Number,
      default: 0
    },
    /**
     * The orginal log text shuold be shown
     */
    log: String,
    /**
     * Loading Status flag
     */
    loading: Boolean,
    /**
     * Auto scroll to the bottom when the logs update. Defaults to be true
     */
    autoScroll: {
      type: Boolean,
      default: true
    },
    /**
     * Has number line if hasNumber is true. Defaults to be true.
     */
    hasNumber: {
      type: Boolean,
      default: true
    },
    /**
     *  When both autoScroll and scrollWithAnimate are true, it will auto scroll to the bottom with an animation.
     */
    scrollWithAnimate: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      start: 0,
      scrollStart: 0,
      animate: null,
      LineWrapper
    }
  },
  computed: {
    remain() {
      if (typeof +this.height === 'number') {
        return this.height > 0 ? Math.floor(this.height / this.rowHeight) : 30
      }
      if (this.height.indexOf('px') > 0) {
        return Math.floor(this.height.split('px')[0] / this.rowHeight)
      }
      return 30
    },
    lines() {
      return parse(this.log)
    },
    linesCount() {
      return this.lines.length + (this.loading ? 1 : 0)
    }
  },
  watch: {
    lines: {
      immediate: true,
      handler(lines) {
        this.$refs.virturalList && this.$refs.virturalList.forceRender()
        if (this.autoScroll) {
          if (this.scrollWithAnimate) {
            this.setScrollTop(this.linesCount)
          } else {
            this.$nextTick(() => {
              // 在nextick外面执行会导致自动滚动到上一次的位置
              this.start = this.lines.length + (this.loading ? 1 : 0)
            })
          }
        }
      }
    }
  },
  methods: {
    /**
     * virturalList forceRender method
     */
    forceRender() {
      this.$refs.virturalList.forceRender()
    },
    //
    getLineWrapperProps(index) {
      const height = this.rowHeight
      const props = {
        height,
        hasNumber: this.hasNumber,
        numberData: {
          number: index + 1
        }
      }
      this.lineWrapperStyle &&
        (props.comStyle = this.lineWrapperStyle(index + 1))
      if (this.loading && index === this.linesCount - 1) {
        return {
          props,
          scopedSlots: {
            default: () => this.$createElement(LogLoading)
          }
        }
      }
      props.data = this.lines[index]
      return {
        props
      }
    },
    setScrollTop(line) {
      if (this.animate) {
        cancelAnimationFrame(this.animate)
      }
      let i = this.scrollStart
      const step = 2
      const animation = () => {
        this.animate = requestAnimationFrame(() => {
          // 从起始行开始滚动，若起始行小于目标行时，每帧逐渐增加行数（向下滚），直到目标行
          // 同理，若起始行大于目标行时，每帧减少行数（向上滚），直到目标行
          // 若当前行在目标行范围内[line-step,line+step], 直接滚到目标行
          if (i < line - step || i > line + step) {
            this.$refs.virturalList.setScrollTop(i * this.rowHeight)
            i = i < line - step ? i + step : i - step
            animation()
          } else {
            this.$nextTick(() => {
              // 在nextick外面执行会导致自动滚动到上一次的位置
              this.start = line
              this.scrollStart = this.start
            })
          }
        })
      }
      animation()
    },
    onscroll(event, data) {
      this.scrollStart = Math.ceil(data.offset / this.rowHeight)
    }
  }
}
</script>
<style lang="less">
.log-viewer {
  font-size: 12px;
  background-color: #222;
  overflow-x: auto;
  padding: 20px 0;
}
</style>
