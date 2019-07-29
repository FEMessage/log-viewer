<template>
  <div class="line-wrapper" :style="customStyle">
    <line-number v-if="hasNumber" v-bind="numberData"></line-number>
    <slot>
      <line-content v-bind="data"></line-content>
    </slot>
  </div>
</template>
<script>
import LineContent from './line-content.vue'
import LineNumber from './line-number.vue'
export default {
  name: 'LineWrapper',
  components: {
    LineContent,
    LineNumber
  },
  props: {
    /**
     * line-content attrs
     */
    data: {
      type: Object,
      default() {
        return {
          text: ''
        }
      }
    },
    /**
     * the line height
     */
    height: {
      type: [Number, String],
      default: 20
    },
    comStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    hasNumber: Boolean,
    numberData: Object
  },
  computed: {
    customStyle() {
      const height =
        typeof this.height === 'number' ? this.height + 'px' : this.height
      return Object.assign(
        {
          lineHeight: height,
          height
        },
        this.comStyle
      )
    }
  }
}
</script>
<style lang="stylus">
.line-wrapper {
  color: #f1f1f1;
  line-height: 20px;
  height: 20px;
  white-space: nowrap;
  // word-break: break-all;
  box-sizing: border-box;
  padding-left: 16px

  &:hover {
    background-color: #444;
  }
  .line-number{
    display:inline-block;
    min-width: 40px;
    text-align: right;
    color: #666;
    padding-right: 8px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .line-content{
    display: inline-block;
  }
}
</style>
