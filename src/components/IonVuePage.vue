<template>
  <ion-page class="ion-page" main>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
        <ion-buttons v-if="showBackButton" slot="start">
          <ion-back-button default-href="/" />
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-content" padding>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'IonVuePage',
  props: {
    title: { type: String, default: '' },
    showBackButton: { type: Boolean, default: true },
  },
}
</script>

