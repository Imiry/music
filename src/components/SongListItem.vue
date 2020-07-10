<template>
  <ul class="song-list">
    <li v-for="value in songs" :key="value.id" class="item">
      <img :src="value.song.album.picUrl" alt="">
      <div>
        <h3>{{value.name}}</h3>
        <p>{{value.song.artists[0].name}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SongListItem',
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/css/mixin";
  @import "../assets/css/variable";
  .song-list{
    width: 100%;
    overflow: hidden;
    .item{
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      // padding: 0 20px;

      border-bottom: 1px solid #ccc;
      img{
        width: 150px;
        height: 150px;
        border-radius: 20px;
        margin-right: 20px;
      }
      div{
        width: 70%;
        h3{
          @include font_size($font_medium);
          @include font_color();
          @include no-wrap();
        }
        p{
          @include font_size($font_medium_s);
          @include font_color();
          @include no-wrap();
          opacity: 0.6;
          margin-top: 20px;
        }
      }
    }
  }
</style>
