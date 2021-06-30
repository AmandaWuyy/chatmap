<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-icon :icon="flowerOutline"></ion-icon>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <!-- <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar> -->
      </ion-header>
      <ion-card>
        <img src="../../../public/assets/img/me_bg.png" />
        <ion-card-header>
          <ion-card-subtitle>登陆页面</ion-card-subtitle>
          <ion-card-title>Id</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-item>
          <ion-label>手机号</ion-label>
          <ion-input></ion-input>
          </ion-item>
          <ion-item>
          <ion-label>密码</ion-label>
          <ion-input></ion-input>
          </ion-item>
        </ion-card-content>
      </ion-card>
      <!-- <ExploreContainer name="checkin" /> -->
      <ion-button expand="block" @click="loginOnClick">登录</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonButtons, IonItem, IonLabel, IonRange, IonPage, IonHeader, IonToolbar, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { flowerOutline, closeCircle, add } from 'ionicons/icons';
// import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'checkIn',
  components: { IonButtons, IonItem, IonLabel, IonRange, IonHeader, IonToolbar, IonContent, IonPage },
  setup() {
    return {
      flowerOutline,
      closeCircle,
      add
    }
  },
  data () {
    return {
      userData: null,
      user: {
        phone: '15330734121',
        password: '12345'
      }
    }
  },
  methods: {
      loginOnClick () {
      this.loginAjax()
    },
    /** ajax */
    loginAjax () {
      let params = {
        userName: this.user.phone,
        passWord: this.user.password
      }
      this.$http.post('/user', params).then(res => {
        this.userData = res.data.data
        let tmpUser = JSON.stringify(this.userData)
        // 登录信息存到本地
        localStorage.setItem('user', tmpUser)
        // 存到vuex
        this.setUser(this.userData)
        this.allDistanceAjax()
        Toast.succeed(`欢迎回来，${this.userData.name}`, 1500)
        this.$router.push({ path: '/trip' })
      })
    },
  }
}
</script>

