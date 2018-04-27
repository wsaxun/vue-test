<template lang="pug">
    div.content
      div.nav
        div.nav-top
          div.nav-top-title(class='title') 
            h2 全部产品
            template(v-for="product in products")
              h3 {{ product.title }}
              ul
                li(v-for="item in product.items") 
                  a(:href="item.url") {{ item.list }}
                  span(v-if="item.hot") HOT
        div.nav-bottom 
          div.nav-bottom-title(class='title')
          h2 最新消息
          ul
            li(v-for="item in news.items")
              a(:href="item.url") {{ item.title }}
      div.main
        div.main-top
          img.gayhub(src="../../assets/img/github.jpg")
        div.main-bottom 
            div.utils
              template(v-for="(item, index) in modulesl.items")
                div.row
                  div.module
                    h2 {{ item.name }}
                    p {{ item.description }}
                    div
                      div(:class="['divBackUrl' + index ]")
                      a(:href="item.url") 立刻购买
</template>

<script>
export default {
  created () {
    this.$http({url: this.$api.products, method: 'get'}).then((response) => {this.products =response.data.data})
    this.$http({url: this.$api.news, method: 'get'}).then((response) => {this.news = response.data}) 
    this.$http({url: this.$api.modules, method: 'get'}).then((response) => {this.modulesl = response.data})           
  },
  data () {
    return {
      products: [],
      news: {},
      modulesl: {}
,
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/less/util');
    .content {
      position: relative;
      padding-top: 100px;
      .clearFloat();
      .nav {
        float: left;
        margin-left: @space;
        h2 {
          .divBackGroupColor(#74C284);
          color: #ffffff;
          .coustomh(14px, 400, 5px, 10px)
        }
        h3 {
          .coustomh()
        }
        .nav-top {
          .nav-top-title {
            height: 290px;
            .divBackGroupColor();
            ul {
              .myul();
              span {
                display: inline-block;
                margin-left: 5px;
                background-color: red;
              }
            }
          }
        }
        .nav-bottom {
          height: 520px;
          width: 240px;
          margin-top: 20px;
          position: relative;
          .divBackGroupColor();
          ul {
            .myul()  
          }          
        }
      }
      .main {
        float: right;
        position: relative;
        margin-right: @space;
        .main-top {
          height: 450px;
          .divBackGroupColor();
          text-align: center;
          .gayhub {
            height: 450px;
          }           
        }
        .main-bottom {
          margin-top: 20px;
          .divBackGroupColor(rgb(235, 238, 243));
          .utils {
            height: 500px;
            .row {
              display: table-row;
              .module{
                  width: 420px;
                  display: table-cell;
                  padding: 14px;
                  position: relative;
                  .divBackGroupColor(#ffffff);
                  h2 {
                      padding-left: 100px;
                  }
                  p {
                      padding-left: 100px;
                  }
                  div {
                      div {
                        background: url(../../assets/img/img1.png);
                        width: 100px;
                        height: 100px;
                      }
                      a {
                          display: inline-block;
                          position: absolute;
                          left: 100px;
                          bottom:0;
                          background-color:green;
                          padding: 10px 20px 10px 20px;
                          color: #ffffff;
                      }
                  }
                }
            }
          }            
        }
      }
    }
</style>
