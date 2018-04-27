<template lang="pug">
    div
        span © 2018 xumingsheng GPL
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    @import url('../../assets/less/util');
    div {
      position: relative;
      text-align: center;
      width: 100%;
      height: 80px;
      .divBackGroupColor(#E3E4E8);
      span {
        .blockmidden();
      }
    }
</style>
