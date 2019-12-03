import TzPullRefresh from './src/main'

TzPullRefresh.install = function (vue) {
  vue.component(TzPullRefresh.name, TzPullRefresh)
}

export default TzPullRefresh
