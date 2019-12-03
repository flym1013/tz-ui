import TzToast from './src/main'
import CreateAPI from 'create-api'
import Vue from 'vue'

TzToast.install = function (vue) {
  vue.component(TzToast.name, TzToast)
}
Vue.use(CreateAPI)

Vue.createAPI(TzToast, true, true, false)

export default TzToast
