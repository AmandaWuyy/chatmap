<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
        <ion-icon :icon="flowerOutline"></ion-icon>
      </ion-toolbar> -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
            <ion-buttons @click="returnOnClick" slot="start">
        <ion-back-button default-href="/tabs/maps"></ion-back-button>
      </ion-buttons>
          <!-- <ion-icon :icon="flowerOutline"></ion-icon> -->
          <ion-title>头像</ion-title>
        </ion-toolbar>
        <!-- <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar> -->
      </ion-header>
      <ion-card>
        <img src="../../../public/assets/img/me_bg.png" />
        <ion-card-header>
          <ion-card-subtitle>你的定位</ion-card-subtitle>
          <ion-card-title>复旦大学</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          这里放地图缩略图
        </ion-card-content>
      </ion-card>
      <!-- 打分 -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card-content>打分</ion-card-content>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div>
                <ion-chip outline color="secondary">
                <ion-icon :icon="flowerOutline"></ion-icon>
                <ion-label>Score</ion-label>
                <ion-icon :icon="closeCircle"></ion-icon>
                </ion-chip>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- 长条 -->
        <ion-item>
          <ion-range min="1" max="5" step="1" snaps pin>
            <ion-label slot="start">1</ion-label>
            <ion-label slot="end">5</ion-label>
            <!-- <ion-icon size="small" slot="start" :icon="flowerOutline"></ion-icon>
            <ion-icon slot="end" :icon="flowerOutline"></ion-icon> -->
          </ion-range>
         </ion-item>
      <!-- 长条end -->
      <!-- 打分end -->
      <!-- problem -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card-content>Problem</ion-card-content>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div>
            <ion-checkbox color="primary" slot="start"></ion-checkbox>
            </div>
          </ion-col>
        </ion-row>
        <ion-card>
        <ion-card-header>
          <ion-card-subtitle>say something... </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          遇到啥问题
        </ion-card-content>
      </ion-card>
      </ion-grid>
      <!-- problem end -->
      <!-- solution -->
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-card-content>Solution</ion-card-content>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div></div>
          </ion-col>
          <ion-col>
            <div>
                <ion-checkbox color="primary" slot="start"></ion-checkbox>
            </div>
          </ion-col>
        </ion-row>
        <ion-card>
        <ion-card-header>
          <ion-card-subtitle>say something... </ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          解决方案
        </ion-card-content>
      </ion-card>
      </ion-grid>
      <!-- solution end -->
      <!-- 打卡按钮 -->
      <ion-fab horizontal="center" vertical="bottom" slot="fixed">
        <ion-fab-button color="danger">
          <ion-icon :icon="add"></ion-icon>
          <ion-fab-list side="top"></ion-fab-list> <!-- 这一行只是为了图标的点击动画，应该改为对号 -->
        </ion-fab-button>
      </ion-fab>
      <!-- 打卡按钮end -->
      <!-- <ExploreContainer name="checkin" /> -->
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
  methods: {
      returnOnClick () {
      this["$router"].push({ name: 'maps' })
    },
  }
}
</script>

