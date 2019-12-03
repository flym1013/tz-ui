
import TzImagePreview from './src/main'
import CreateAPI from 'create-api'
import Vue from 'vue'

TzImagePreview.install = function (vue) {
  vue.component(TzImagePreview.name, TzImagePreview)
}
Vue.use(CreateAPI)

Vue.createAPI(TzImagePreview, true, true, false)

export default TzImagePreview
