const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    require('autoprefixer'),
    new PrerenderSpaPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [ '/', '/frontend', '/motion', '/minimalism' ]
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin()
    ]
  }
})
