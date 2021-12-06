// micro-app-main/src/shared/index.ts
import store from './store'

class Shared {
  private text: string | undefined
  constructor() {
    this.text = '123'
  }
  /**
   * 获取 Text
   */

  public getText(): string {
    const state = store.getState()
    this.text = state.text
    return state.text || ''
  }

  /**
   * 设置 Text
   */
  public setText(text: string): void {
    // 将 text 的值记录在 store 中
    this.text = text
    store.dispatch({
      type: 'SET_TEXT',
      value: text
    })
  }
}

const shared = new Shared()
export default shared
