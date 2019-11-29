<template>
  <div class="line-content">
    <span
      v-for="(item, index) in content"
      :key="index"
      :class="[
        item.bold ? 'log-bold' : '',
        item.underline ? 'log-underline' : '',
        item.italic ? 'log-italic' : '',
        item.foreground ? 'log-fore-' + item.foreground : '',
        item.background ? 'log-back-' + item.background : ''
      ]"
      >{{ item.text }}</span
    >
  </div>
</template>
<script>
export default {
  name: 'LineContent',
  props: {
    /**
     * log text content
     */
    content: Array
  }
}
</script>

<style lang="less">
@black: rgb(0, 0, 0);
@red: rgb(194, 54, 33);
@green: rgb(37, 188, 36);
@yellow: rgb(173, 173, 39);
@blue: rgb(73, 46, 225);
@magenta: rgb(211, 56, 211);
@cyan: rgb(51, 187, 200);
@white: rgb(203, 204, 205);
@bright-black: rgb(129, 131, 131);
@bright-red: rgb(252, 57, 31);
@bright-green: rgb(49, 231, 34);
@bright-yellow: rgb(234, 236, 35);
@bright-blue: rgb(88, 51, 255);
@bright-magenta: rgb(180, 0, 158);
@bright-cyan: rgb(97, 214, 214);
@bright-white: rgb(242, 242, 242);
.log(@color) {
  @bright: 'bright-@{color}';

  .log-fore-@{color} {
    color: @@color;

    &.log-underline {
      text-decoration-color: @@color;
    }
  }

  .log-fore-bright-@{color} {
    color: @@bright;

    &.log-underline {
      text-decoration-color: @@bright;
    }
  }

  .log-back-@{color} {
    background: @@color;
  }

  .log-back-bright-@{color} {
    background: @@bright;
  }
}

.line-content {
  .log-bold {
    font-weight: bold;
  }

  .log-underline {
    text-decoration: underline;
  }

  .log-italic {
    font-style: italic;
  }
  .log(black);
  .log(red);
  .log(green);
  .log(yellow);
  .log(blue);
  .log(magenta);
  .log(cyan);
  .log(white);
}
</style>
