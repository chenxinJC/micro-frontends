import './public-path'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory, Router, RouterHistory } from 'vue-router'
import router from './router'
import store from './store'

createApp(App).mount('#app')

// let router: Router
// let instance: any = null
// let history: RouterHistory
/* if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
} */

/**
 * 渲染函数
 * 主应用生命周期钩子中运行/子应用单独启动时运行
 */
// function render(props: any = {}) {
//   console.log('🚀 ~ props', props)
//   const { container } = props
//   history = createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/openlayers' : '/')
//   router = createRouter({
//     history,
//     routes
//   })

//   instance = createApp(App)
//   instance.use(router)
//   instance.use(store)
//   instance.mount(container ? container.querySelector('#app') : '#app')
// }

// export async function bootstrap() {
//   console.log('openlayers bootstraped')
// }

// // 从生命周期 mount 中获取通信方法，使用方式和 master 一致
// export async function mount(props: any) {
//   console.log('app-sub-openlayers mount', props)
//   props.onGlobalStateChange((state: any) => {})
//   render(props)
// }

// /* 子应用销毁 */
// export async function unmount() {
//   console.log('app-sub-openlayers unmount')
//   instance.unmount()
//   instance._container.innerHTML = ''
//   instance = null
//   history.destroy()
// }
