const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "main.css"
      })

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
        }
      ]
    },

    entry: './app.js',
    
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    }
  };