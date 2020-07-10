// 这个JS文件就是专门用于管理请求各种接口地址的
import Network from './network'

// 封装各种接口请求
export const getBanner = () => Network.get('banner?type=2') //获取轮播图的数据
export const getPersonalized = () => Network.get('/personalized?limit=6')//获取推荐歌单数据
export const getAlbum = () => Network.get('/album/newest') //获取最新专辑
export const getNewSong = () => Network.get('personalized/newsong') //获取最新音乐