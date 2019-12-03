import TzPopup from './src/main'

TzPopup.install = function (vue) {
  vue.component(TzPopup.name, TzPopup)
}

export default TzPopup
