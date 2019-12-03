import TzDialog from './src/main'
import CreateAPI from 'create-api'
import Vue from 'vue'

TzDialog.install = function (vue) {
  vue.component(TzDialog.name, TzDialog)
}
Vue.use(CreateAPI)

Vue.createAPI(TzDialog, true, true, false)

export default TzDialog
