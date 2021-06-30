<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>maps</ion-title>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <!-- Searchbar with cancel button shown on focus -->
        <ion-searchbar show-cancel-button="focus"
        @click="presentActionSheet"
        ></ion-searchbar>
        <!-- v-on:ionInput="handleSearch" -->
      </ion-header>
      <div id="container">正在加载数据 ...</div>
      <!-- <mapDrag @drag="dragMap" class="mapbox"></mapDrag> -->
      <!-- 打卡按钮 -->
      <ion-fab horizontal="end" vertical="center" slot="fixed">
        <ion-fab-button color="danger" @click="checkInOnClick">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <!-- 打卡按钮end -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonSearchbar, actionSheetController, IonPage, IonHeader, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
// import mapDrag from '@/components/mapDrag.vue';
import { defineComponent } from 'vue';
import { heart, close, add } from 'ionicons/icons';

import remoteLoad from '@/utils/remoteLoad.js'
import { MapKey, MapCityName } from '@/config/config'

export default defineComponent({
  name: 'maps',
  components: { IonHeader, IonContent, IonPage, IonFab, IonFabButton, IonIcon },
  setup() {
    return {
      add
    }
  },
  props: ['lat', 'lng'],
  data () {
    return {
    //   trafficMap: null, // 地图实例
      dragStatus: false,
      AMapUI: null,
      AMap: null
    }
  },
//   mounted () {
//     this.init()
//     this.loactionMap()
//     // this.searchDriving()
//     // this.searchKey()
//   },
  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
        .create({
          header: '附近的POI',
          cssClass: 'my-custom-class',
          buttons: [
            {
              text: 'POI One',
              role: 'destructive',
              icon: heart,
              handler: () => {
                console.log('Delete clicked')
              },
            },
            {
              text: 'POI Two',
              icon: heart,
              handler: () => {
                console.log('Share clicked')
              },
            },
            {
              text: 'POI Three',
              icon: heart,
              handler: () => {
                console.log('Play clicked')
              },
            },
            {
              text: 'POI Four',
              icon: heart,
              handler: () => {
                console.log('Favorite clicked')
              },
            },
            {
              text: 'Cancel',
              icon: close,
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked')
              },
            },
          ],
         });
      await actionSheet.present();

      const { role } = await actionSheet.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
    checkInOnClick () {
      this.$router.push({ name: 'CheckIn' })
    },
    // init () {
    //   this.trafficMap = new window.AMap.Map('container', {
    //     resizeEnable: true,
    //     center: [116.397428, 39.90923],
    //     zoom: 13 // 地图显示的缩放级别
    //   })
    // },
    initMap () {
      // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
      let AMapUI = this.AMapUI = (window as any).AMapUI
      let AMap = this.AMap = (window as any).AMap
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 16,
          cityName: MapCityName,
          resizeEnable: true,
          center: [116.397428, 39.90923],
        }
        if (this.lat && this.lng) {
          mapConfig.center = [this.lng, this.lat]
        }
        let map = new AMap.Map('container', mapConfig)
        // 启用工具条
        AMap.plugin(['AMap.ToolBar', 'AMap.Geolocation'], function () {
          map.addControl(new AMap.ToolBar({
            position: 'RB'
          }))
          let geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 15000, // 超过10秒后停止定位，默认：5s
            buttonPosition: 'RB', // 定位按钮的停靠位置
            buttonOffset: new AMap.Pixel(100, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
          })
          // 定位插件---------------------------------------------------------
          map.addControl(geolocation)
          geolocation.getCurrentPosition(function (status, result) {
            // Toast.hide()
          })
          AMap.event.addListener(geolocation, 'error', function (e) {
            console.log(e)
          }) // 返回定位出错信息
        })
        // 创建地图拖拽
        let positionPicker = new PositionPicker({
          mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: map // 依赖地图对象
        })
        // 拖拽完成发送自定义 drag 事件
        positionPicker.on('success', positionResult => {
          // 过滤掉初始化地图后的第一次默认拖放
          if (!this.dragStatus) {
            this.dragStatus = true
          } else {
            this.$emit('drag', positionResult)
          }
        })
        // 启动拖放
        positionPicker.start()
      })
    },
  },
  async created () {
    // 已载入高德地图API，则直接初始化地图
    if ((window as any).AMap && (window as any).AMapUI) {
      this.initMap()
    // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  }
});
</script>

<style>
body{ margin: 0; }
.m-part .mapbox{ width: 600px; height: 400px; margin-bottom: 20px; float: left; }
#container {
  width: 100%; 
  height: 100%; 
  overflow:hidden; 
  margin:0; 
  z-index:1000; 

}
</style>