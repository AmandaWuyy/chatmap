import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';
// import AMap from 'vue-amap';

// Import IonVuePage component
import IonVuePage from '@/components/IonVuePage.vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .component('IonVuePage', IonVuePage);

//   // 初始化vue-amap
//   AMap.initAMapApiLoader({
//     // 高德key
//     key: '64f5b3057578d543f2bac67a428edb25',
//     // 插件集合 （插件按需引入）
//     plugin: ['AMap.Geolocation']
//   });
  
router.isReady().then(() => {
  app.mount('#app');
});