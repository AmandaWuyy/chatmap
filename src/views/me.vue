<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-title>Tab 3</ion-title>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <!-- <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar> -->
      </ion-header>
      <div class="me">
      <img class="me-bgimg" src="../../public/assets/img/me_bg.png">
      <div class="me-top">
      <span @click="loginOutOnClick" class="me-top-outbtn">退出登录</span>
     </div>
     </div>
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>Destination</ion-card-subtitle>
          <ion-card-title>{{name}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <img class="me-top-heaimg" :src="img" alt>
          <!-- <p class="me-top-phone">账号:{userName}}</p> -->
          <p>您已出行XXKm，相当于攀爬珠峰1/3的路程</p>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>{{Month}}</ion-card-subtitle>
          <ion-card-title>{{Juli}}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          历史出行
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
// import userDetails from '@/components/userDetails.vue';


export default  {
  name: 'me',
  components: { IonHeader, IonContent, IonPage },
  data () {
    return {
      img: null,
      name: "wyy",
      userName: null,
      Month:"2021/06月",
      Juli: "82.5Km"
    }
  }
}
</script>

<style scoped>
.me {
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
  position: relative;
}
.me-bgimg {
  width: 100%;
  /* width: calc(100% + 540px);
  height: 100%; 
  margin-left: -120px;*/
}
.me-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  /* height: 170px; */
  /* display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.438); */
}
.me-top-outbtn {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #ffffff;
  font-size: 12px;
}
.me-top-heaimg {
  width: 80px;
  height: 80px;
  border-radius: 140px;
  box-shadow: 0px 0px 5px #cac8c8;
  /* margin-top: 100px;
  margin-left:40px; */
}
.me-top-name {
  color: #ffffff;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
}
.me-top-phone {
  color: #ffffff;
  font-size: 28px;
  margin-top: 10px;
}
.me-top-bto {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 60px;
  color: #ffffff;
  box-sizing: border-box;
  margin-top: 60px;
}
.me-top-bto p {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.me-top-bto p span:nth-child(1) {
  font-weight: bold;
}
.me-con {
  width: 100%;
  padding: 40px;
  box-sizing: border-box;
}
.me-con h2 {
  font-size: 30px;
  color: black;
}
.me-con-user {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  padding: 20px 0;
}
.me-con-user p {
  min-width: 200px;
  height: 60px;
  font-size: 25px;
}
.me-con-user span:nth-child(2) {
  color: black;
}
.me-con-data {
  width: 100%;
  height: 650px;
  padding: 40px 20px;
  margin-top: -100px;
  box-sizing: border-box;
}
</style>
