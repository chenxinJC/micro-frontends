import { initGlobalState, MicroAppStateActions } from 'qiankun'

const initialState = { text: 'main' }

const action: MicroAppStateActions = initGlobalState(initialState)

export default action
