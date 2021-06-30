declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module 'vue-amap';
// 重要
declare const AMap: any;

declare module '@/utils/remoteLoad.js';
declare module '@/config/config';
