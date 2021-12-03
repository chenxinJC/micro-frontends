// micro-app-main/src/shared/store.ts
import { createStore } from 'redux'

export type State = {
  text?: string
}

type Action = {
  type: string
  value: any
}

const reducer = (state: State = {}, action: Action): State => {
  switch (action.type) {
    default:
      return state
    // 设置 Token
    case 'SET_TEXT':
      return {
        ...state,
        text: action.value
      }
  }
}

const store = createStore<State, Action, unknown, unknown>(reducer)

export default store
