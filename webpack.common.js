const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const WebappWebpackPlugin = require('webapp-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { GenerateSW } = require('workbox-webpack-plugin')

const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: '[name].[hash].js',
    publicPath: ASSET_PATH,
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: path.join(__dirname, 'src/assets'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        include: [
          path.join(__dirname, 'src/assets')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/audio/[name].[hash].[ext]'
          }
        }
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/video/[name].[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new VueLoaderPlugin(),
    new WebappWebpackPlugin({
      logo: './src/assets/images/icon.png',
      prefix: 'assets',
      favicons: {
        appName: 'IV portfolio',
        appDescription: 'personal portfolio',
        developerName: 'Ilya Vasilyev',
        background: '#eee',
        theme_color: '#444'
      }
    }),
    new CopyWebpackPlugin([
      { from: './src/static', to: './assets' }
    ]),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
    }),
    new GenerateSW({
      globDirectory: '.',
      skipWaiting: true
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, 'src')
    }
  }
}
