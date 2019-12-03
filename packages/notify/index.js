import TzNotify from './src/main'
import CreateAPI from 'create-api'
import Vue from 'vue'

TzNotify.install = function (vue) {
  vue.component(TzNotify.name, TzNotify)
}
Vue.use(CreateAPI)

Vue.createAPI(TzNotify, true, true, false)

export default TzNotify
