import TzStepper from './src/main'

TzStepper.install = function (Vue) {
  Vue.component(TzStepper.name, TzStepper)
}
export default TzStepper
