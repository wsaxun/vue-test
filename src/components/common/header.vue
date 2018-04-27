<template lang="pug">
    div.app-header
        a(href="#")
            img(src="../../assets/img/logo.png")
        div
            ul
                li 登录
                li 注册
                li 关于
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import url('../../assets/less/util');
.app-header {
    .divBackGroupColor(#363636);
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    .clearFloat();
    a{
    display: block;
    float: left;
    margin-left: @space;
    .blockmidden();
    img {
        height: 50px;
        width: 50px;
    }
    }
    div {
    float: right;
    position: relative;
    margin-right: @space;
    top: 35%;
    ul {
        .divBackGroupColor(#363636);
        li {
        display: inline-block;
        margin-left: 8px;
        color: #B2B2B2;
        }
    }
    }
}
</style>
