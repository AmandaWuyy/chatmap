<template>
  <IonVuePage :title="'wyy examples'" :showBackButton="false">
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="findings" href="/tabs/findings">
        <!-- <ion-icon name="planet-outline"></ion-icon> -->
          <ion-icon :icon="compassOutline" />
          <ion-label>findings</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="maps" href="/tabs/maps">
          <!-- <ion-icon name="locationOutline"></ion-icon> -->
          <ion-icon :icon="locationOutline" />
          <ion-label>maps</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="me" href="/tabs/me">
          <ion-icon :icon="personCircleOutline" />
          <ion-label>me</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </IonVuePage>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon } from '@ionic/vue';
import {  locationOutline, compassOutline, personCircleOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon },
  setup() {
    return {
      locationOutline,
      compassOutline,
      personCircleOutline, 
    }
  }
}
</script>