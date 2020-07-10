<template>
    <div class="tabbar">
      <router-link tag="div" class="item" to="/recommed">
        推荐
      </router-link>
      <router-link tag="div" class="item" to="/singer">
        歌手
      </router-link>
      <router-link tag="div" class="item" to="/rank">
        排行
      </router-link>
      <router-link tag="div" class="item" to="/search">
        搜索
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
  @import "../assets/css/variable";
  @import "../assets/css/mixin";

.tabbar{
  width: 100%;
  height: 84px;
  @include bg_sub_color();
  display: flex;
  justify-content: space-around;
  /*position: relative;*/
  /*z-index: 999;*/
  .item{
      line-height: 84px;
      font-weight: bold;
      @include font_size($font_medium);
      @include font_color();

    &.router-link-active{
      span{
        @include font_active_color();
      }
      border-bottom: 5px solid #000;
      @include border_color();
    }
  }
}
</style>
