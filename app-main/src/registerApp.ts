import {
  registerMicroApps,
  setDefaultMountApp,
  runAfterFirstMounted,
  start
} from 'qiankun'
import apps from './shared/apps'
import action from './shared/action'
export default function () {
  /* 注册子应用 */
  registerMicroApps(apps)

  /**
   * onGlobalStateChange: (callback: OnGlobalStateChangeCallback, fireImmediately?: boolean) => void， 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
   * setGlobalState: (state: Record<string, any>) => boolean， 按一级属性设置全局状态，微应用中只能修改已存在的一级属性
   * offGlobalStateChange: () => boolean，移除当前应用的状态监听，微应用 umount 时会默认调用
   */
  /* 注册观察者 */
  action.onGlobalStateChange((value, prev) => {
    console.log('🚀 ~ onGlobalStateChange', value, prev)
  })
  action.setGlobalState({
    ignore: 'master',
    text: '1'
  })
  action.offGlobalStateChange()

  /**
   * Step3 设置默认进入的子应用
   */
  setDefaultMountApp('/openlayers')

  /**
   * Step4 启动应用
   */
  start({ sandbox: { experimentalStyleIsolation: true } })

  /**
   * runAfterFirstMounted: () => void
   * 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
   */
  runAfterFirstMounted(() => {
    console.log('🚀 ~ MainApp first app mounted')
  })
}
