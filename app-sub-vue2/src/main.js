import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import actions from './shared/action'

Vue.config.productionTip = false

let instance = null
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * 渲染函数
 * 主应用生命周期钩子中运行/子应用单独启动时运行
 */
function render (props = {}) {
  const { container } = props;
  if (props) {
    // 注入 actions 实例
    actions.setActions(props);
  }
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

export async function bootstrap () {
  console.log("vue2 app bootstraped");
}

// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export async function mount (props) {
  console.log("vue2 mount", props);

  // 设置通讯
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange;
  Vue.prototype.$setGlobalState = props.setGlobalState;
  props.onGlobalStateChange((state) => {
    console.log("🚀 ~ state", state);
  });
  setTimeout(() => {
    props.setGlobalState({text: '1111'});
    render(props);
  }, 2000)
}

export async function unmount () {
  console.log("vue2 unmount");
  instance.$destroy();
  instance = null;
}

