<template lang="pug">
  div 
    shoppingHead
    keep-alive
      router-view  
    shoppingFooter
</template>

<script>
import shoppingFooter from './common/footer'
import shoppingHead from './common/header'
import indexContent from './common/index'
export default {
  name: 'index',
  components: {
    shoppingFooter,
    shoppingHead,
    indexContent,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import url('../assets/less/util');
  div {
    .divBackGroupColor(rgb(235, 238, 243));
    width: 1520px;
  }
</style>
