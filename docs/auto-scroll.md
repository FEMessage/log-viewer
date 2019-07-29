auto-scroll 属性设置是否自动滚动到底部

set auto-scroll true to auto scroll to bottom

```vue
<template>
  <div>
    <log-viewer class="auto-scroll" v-for="auto in autoes" :key="auto" :height="100" :log="log" :auto-scroll="auto" />
  </div>
</template>
<script>
  export default{
    data(){
      return {
        log: 'Build language: python\n[encryption, version 2.91 of 05 Jan 2007] (modified for Zip 3)Copyright (C) 2002-2007 Andrew Tridgell\nPath to mail program: /usr/sbin/sendmail\n\nSHELLOPTS\nPath to mail program: /usr/sbin/sendmail\n[34m[1mpostgresql client version[0m\n+cmdline_compl   +insert_expand   -perl            +user_commands\nUSE_EF_UT_TIME       (store Universal Time)\nSudoers I/O plugin version 1.8.9p5\n	TERMINFO\nCMake suite maintained and supported by Kitware (kitware.com/cmake).\nLocale to use while parsing sudoers: C\n[34m[1mgcc version[0m\nPacker v1.0.2\nGNU bash, version 4.3.11(1)-release (x86_64-pc-linux-gnu)\n[34m[1mbats version[0m\n[34m[1mmysql version[0m\n  - with Cyrus SASL authentication\nAllow some information gathering to give useful error messages\nAuthentication timestamp timeout: 15.0 minutes\n Git commit:   afdb6d4\nThis program is free software; you can redistribute it and/or modify it under\nPAM service name to use',
        autoes: [true, false]
      }
    }
  }
</script>
<style>
.auto-scroll{
  margin-bottom: 8px;
}
</style>

```
