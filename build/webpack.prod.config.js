const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common.config.js')
const config = require('../config')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

process.env.NODE_ENV = 'production'

const configuration = merge(commonConfig, {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'tz-ui.common.js',
    library: 'tz-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  //这里我们可以剔除掉一些通用包,自己的包不打包这些类库,需要用户环境来提供
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new cleanWebpackPlugin(['../lib']),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/utils/flexible/index.js'),
      to: path.resolve(__dirname, '../lib/flexible.[ext]'),
      ignore: ['.*']
    }]),
    new uglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ]
})

module.exports = configuration
