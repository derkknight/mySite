var LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {

    entry: path.join(__dirname, '/src/index.js'),
    
    mode : 'development',

    devServer: {
      port: 3000,
      open: true,
      proxy: {
        "/api": "http://localhost:8080"
      },
      historyApiFallback: true,
    },

    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'dist/index.html')
      }),

      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "main.css"
      }),

      new CopyWebpackPlugin([
        {from:'public', to:'public'}
      ])

    ],
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        }
      ],
    }


  };