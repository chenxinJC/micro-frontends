import { RegistrableApp, ObjectType } from 'qiankun'
const routes: Array<RegistrableApp<ObjectType>> = [
  {
    name: 'vue2',
    entry: '//localhost:10001',
    container: '#root',
    activeRule: '/vue2'
  },
  {
    name: 'openlayers',
    entry: '//localhost:7001',
    container: '#root',
    activeRule: '/openlayers'
  }
]
export default routes
