import 'babel-polyfill'
import 'flexible'
import Vue from 'vue'
import App from './app'
import router from './router'
import TzUI from '../src/index'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import VueLazyLoad from 'vue-lazyload'

Vue.use(TzUI)

Vue.use(VueLazyLoad)

const requireComponent = require.context('./components', false, /[a-zA-Z]*\.vue/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
  if (fileName === 'TzNotify') {
    Vue.prototype.$notify = componentConfig
  }
})

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
