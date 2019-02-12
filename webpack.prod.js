const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/', '/b' ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
})
