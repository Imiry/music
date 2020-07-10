<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
    <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
    <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
    <NewSongs :songs="songs"></NewSongs>
  </div>
</template>
<script>
import Banner from '../components/Recommed/Banner'
import Personalized from '../components/Recommed/Personalized'
import NewSongs from '../components/Recommed/NewSongs'
import { getBanner,getPersonalized,getAlbum,getNewSong } from "../api/index";
export default {
  name: "Recommed",
  components:{
    Banner,
    Personalized,
    NewSongs
  },
  data() {
    return {
      banners:[],
      personalized:[],
      albums:[],
      songs:[]
    }
  },
  created() {
    getBanner()
      .then(data => {
        // console.log(data);
        this.banners = data.banners
      })
      .catch(error => {
        console.log(error);
      });

    getPersonalized()
      .then(data => {
        // console.log(data);
        this.personalized = data.result
      })
      .catch(error => {
        console.log(error);
      });
    getAlbum()
      .then(data => {
        // console.log(data);
        this.albums = data.albums.splice(0,6)
      })
      .catch(error => {
        console.log(error);
      });
    getNewSong()
      .then(data => {
        console.log(data);
        this.songs = data.result
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="scss" scoped>

</style>